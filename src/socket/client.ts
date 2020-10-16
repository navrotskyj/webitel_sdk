import { EventEmitter } from 'ee-ts'

import { Log } from '../log/index'
import { CallSession, SipConfiguration } from '../sip/index'
import { SipPhone } from '../sip/webrtc'
import { Agent, AgentSession, AgentStatusEvent } from './agent'
import {
  AnswerRequest,
  Call,
  CallActions,
  CallEventData,
  CallEventDTMF,
  CallEventExecute,
  CallItem,
  CallReporting,
  EavesdropRequest,
  OutboundCallRequest,
} from './call'
import {
  BaseChatEvent,
  ChatActions,
  ChatEvent,
  Conversation,
  InviteEvent,
  JoinedEvent,
  MessageEvent,
} from './conversation'
import { QueueJoinMemberEvent } from './queue'
import { Message, Socket } from './socket'
import { ChannelEvent, Task } from './task'
import { UserStatus } from './user'

export interface Config {
  endpoint: string
  token?: string
  logLvl?: 'debug' | 'info' | 'warn' | 'error'
  registerWebDevice?: boolean
  phone?: number
  debug?: boolean
}

interface PromiseCallback {
  resolve: (res: object) => void
  reject: (err: object) => void
}

export interface UserCallRequest {
  nodeId?: string | null
  parentCallId?: string | null
  sendToCallId?: string | null
  toUserId: string
  useVideo?: boolean
  useScreen?: boolean
  useAudio?: boolean
  variables?: Map<string, string>
}

const WEBSOCKET_AUTHENTICATION_CHALLENGE = 'authentication_challenge'
const WEBSOCKET_DEFAULT_DEVICE_CONFIG = 'user_default_device'
const WEBSOCKET_AGENT_SESSION = 'cc_agent_session'
// const WEBSOCKET_CALL_BY_USER = 'call_by_user'

const WEBSOCKET_MAKE_OUTBOUND_CALL = 'call_invite'
const WEBSOCKET_MAKE_USER_CALL = 'call_user'
const WEBSOCKET_EVENT_HELLO = 'hello'
const WEBSOCKET_EVENT_CALL = 'call'
const WEBSOCKET_EVENT_CHAT = 'chat'
const WEBSOCKET_EVENT_USER_STATE = 'user_state'
const WEBSOCKET_EVENT_AGENT_STATUS = 'agent_status'
const WEBSOCKET_EVENT_CHANNEL_STATUS = 'channel'
const WEBSOCKET_EVENT_QUEUE_JOIN_MEMBER = 'queue_join_member'

const TASK_EVENT = 'task'

const WEBSOCKET_EVENT_SIP = 'sip'

export enum Response {
  STATUS_FAIL = 'FAIL',
  STATUS_OK = 'OK',
}

export interface Session {
  id: string
  expire: number
  user_id: number
  role_ids: number[]
}

export interface ConnectionInfo {
  sock_id: string
  server_build_commit: string
  server_node_id: string
  server_version: string
  server_time: number
  session: Session
}

export interface ListResponse {
  items?: CallItem[]
  next?: boolean
}

export type CallEventHandler = (action: CallActions, call: Call) => void
export type ChatEventHandler = (
  action: string,
  conversation: Conversation
) => void

export type UsersStatusEventHandler = (state: UserStatus) => void
export type AgentStatusEventHandler = (state: AgentStatusEvent) => void

export type TaskEventHandler = (action: string, task: Task | undefined) => void

export type QueueJoinMemberHandler = (member: QueueJoinMemberEvent) => void

interface EventHandler {
  [WEBSOCKET_EVENT_CALL](action: CallActions, call: Call): void
  [WEBSOCKET_EVENT_USER_STATE](state: UserStatus): void
  [WEBSOCKET_EVENT_SIP](data: object): void
  [WEBSOCKET_EVENT_AGENT_STATUS](status: AgentStatusEvent): void

  [WEBSOCKET_EVENT_QUEUE_JOIN_MEMBER](member: QueueJoinMemberEvent): void
  [TASK_EVENT](name: string, task: Task | undefined): void
  [WEBSOCKET_EVENT_CHAT](action: string, conversation: Conversation): void
}

export interface ClientEvents {
  disconnected(code: number): void
}

export class Client extends EventEmitter<ClientEvents> {
  agent!: Agent
  phone?: SipPhone
  private socket!: Socket
  private connectionInfo!: ConnectionInfo

  private reqSeq = 0
  private queueRequest: Map<number, PromiseCallback> = new Map<
    number,
    PromiseCallback
  >()
  private log: Log
  private eventHandler: EventEmitter<EventHandler>
  private callStore: Map<string, Call>
  private conversationStore: Map<string, Conversation>

  constructor(protected readonly _config: Config) {
    super()
    this.log = new Log()
    this.eventHandler = new EventEmitter()
    this.callStore = new Map<string, Call>()
    this.conversationStore = new Map<string, Conversation>()
  }

  async connect() {
    await this.connectToSocket()
  }

  async disconnect() {
    this.socket.close()
  }

  async subscribeCall(handler: CallEventHandler, data?: object) {
    const calls = (await this.request(`subscribe_call`, data)) as ListResponse
    this.eventHandler.on(WEBSOCKET_EVENT_CALL, handler)

    if (calls.items && calls.items.length) {
      for (const c of calls.items) {
        if (c.hangup_at && c.hangup_at > 0) {
          continue
        }

        const e: CallEventData = {
          cc_app_id: '', // TODO
          app_id: c.app_id,
          event: c.state,
          id: c.id,
          timestamp: Date.now(),
          data: {
            app_id: c.app_id,
            event: c.state,
            id: c.id,
            timestamp: Date.now(),
            cc_app_id: '',
            sip_id: '',

            parent_id: c.parent_id,

            direction: c.direction,
            destination: c.destination,
            queue: undefined, // TODO
            from: c.from,
            to: c.to,
            payload: c.variables,
          },
        }

        const call = new Call(this, e)
        call.createdAt = c.created_at
        call.answeredAt = c.answered_at || 0
        call.bridgedAt = c.bridged_at || 0

        call.reportingAt = c.reporting_at || 0
        this.callStore.set(call.id, call)
      }
    }

    return calls
  }

  async subscribeChat(handler: ChatEventHandler, data?: object) {
    const res = await this.request(`subscribe_chat`, data)
    this.eventHandler.on(WEBSOCKET_EVENT_CHAT, handler)

    return res
  }

  async subscribeQueueJoinMember(
    handler: QueueJoinMemberHandler,
    data?: object
  ) {
    const res = await this.request(`subscribe_queue_join_member`, data)
    this.eventHandler.on(WEBSOCKET_EVENT_QUEUE_JOIN_MEMBER, handler)

    return res
  }

  async subscribeUsersStatus(handler: UsersStatusEventHandler, data?: object) {
    const res = await this.request(`subscribe_users_status`, data)
    this.eventHandler.on(WEBSOCKET_EVENT_USER_STATE, handler)

    return res
  }

  async subscribeAgentsStatus(handler: AgentStatusEventHandler, data?: object) {
    const res = await this.request(`cc_agent_subscribe_status`, data)
    this.eventHandler.on(WEBSOCKET_EVENT_AGENT_STATUS, handler)

    return res
  }

  subscribeTask(handler: TaskEventHandler) {
    this.eventHandler.on(TASK_EVENT, handler)
  }

  async unSubscribe(action: string, handler: CallEventHandler, data?: object) {
    const res = await this.request(`un_subscribe_${action}`, data)

    // this.eventHandler.listeners(action)
    // this.eventHandler.removeListener(action, handler)
    // this.eventHandler.off(action, handler)

    return res
  }

  allCall(): Call[] {
    return Array.from(this.callStore.values())
  }

  callById(id: string): Call | undefined {
    if (this.callStore.has(id)) {
      return this.callStore.get(id)
    }
  }

  conversationById(id: string): Conversation | undefined {
    if (this.conversationStore.has(id)) {
      return this.conversationStore.get(id)
    }
  }

  callBySipId(id: string): Call | undefined {
    for (const call of this.allCall()) {
      if (call.sipId && id.startsWith(call.sipId)) {
        // FIXME
        return call
      }
    }
  }

  async reportingTask(attemptId: number, reporting: CallReporting) {
    return this.request('cc_reporting', {
      attempt_id: attemptId,
      ...reporting,
    })
  }

  async auth() {
    return this.request(WEBSOCKET_AUTHENTICATION_CHALLENGE, {
      token: this._config.token,
    })
  }

  sessionInfo(): Session {
    return this.connectionInfo.session
  }

  get version(): string {
    return this.connectionInfo.server_version
  }

  get instanceId(): string {
    return this.connectionInfo.sock_id
  }

  async agentSession() {
    const info = await this.request(WEBSOCKET_AGENT_SESSION)

    this.agent = new Agent(this, info as AgentSession)

    return this.agent
  }

  async invite(req: OutboundCallRequest) {
    return this.request(WEBSOCKET_MAKE_OUTBOUND_CALL, req)
  }

  async call(req: OutboundCallRequest) {
    if (this.phone) {
      await this.phone.call(req)
    } else {
      await this.invite(req)
    }
  }

  async callRecordId(id: string) {
    return this.request('call_recordings', { id })
  }

  async eavesdrop(req: EavesdropRequest) {
    return this.request('call_eavesdrop', req)
  }

  async agentSetOnline(agentId: number, channels: string[], onDemand: boolean) {
    return this.request('cc_agent_online', {
      agent_id: agentId,
      channels,
      on_demand: onDemand,
    })
  }

  async agentSetWaiting(agentId: number, channel: string) {
    return this.request('cc_agent_waiting', {
      agent_id: agentId,
      channel,
    })
  }

  async agentSetPause(agentId: number, payload?: any) {
    return this.request('cc_agent_pause', {
      agent_id: agentId,
      payload,
    })
  }

  async agentSetOffline(agentId: number) {
    return this.request('cc_agent_offline', { agent_id: agentId })
  }

  inviteToUser(req: UserCallRequest) {
    return this.request(WEBSOCKET_MAKE_USER_CALL, req)
  }

  async answer(id: string, req: AnswerRequest) {
    if (this.phone) {
      return this.phone.answer(id, req)
    }
  }

  request(action: string, data?: object): Promise<object> {
    return new Promise<Error>((resolve: () => void, reject: () => void) => {
      this.queueRequest.set(++this.reqSeq, { resolve, reject })
      this.socket.send({
        seq: this.reqSeq,
        action,
        data,
      })
    })
  }

  useWebPhone(): boolean {
    return this._config.registerWebDevice || false
  }

  callDestroyed(call: Call) {
    return call.hangupAt > 0 && !this.hasAgentTask(call)
  }

  reportingCallTask(task: Task) {
    // TODO

    for (const call of this.allCall()) {
      if (this.callDestroyed(call)) {
        this.destroyCall(call)
        break
      }
    }
  }

  async registerCallClient(phone: SipPhone) {
    this.phone = phone

    this.phone.on(
      'peerStreams',
      (session: CallSession, streams: MediaStream[] | null) => {
        const call = this.callBySession(session)
        if (call && !call.peerStreams.length) {
          call.setPeerStreams(streams)
          this.eventHandler.emit(
            WEBSOCKET_EVENT_CALL,
            CallActions.PeerStream,
            call
          )
        }
      }
    )

    this.phone.on(
      'localStreams',
      (session: CallSession, streams: MediaStream[] | null) => {
        const call = this.callBySession(session)
        if (call && !call.localStreams.length) {
          call.setLocalStreams(streams)
          this.eventHandler.emit(
            WEBSOCKET_EVENT_CALL,
            CallActions.LocalStream,
            call
          )
        }
      }
    )

    this.phone.on('newSession', this.onNewCallSession.bind(this))

    try {
      const conf = await this.deviceConfig(this.phone.type)
      await this.phone.register(conf as SipConfiguration)
    } catch (e) {
      // FIXME add handle error
      this.log.error(e)
    }
  }

  async deviceConfig(name?: string) {
    return this.request(WEBSOCKET_DEFAULT_DEVICE_CONFIG, { name })
  }

  private async onMessage(message: Message) {
    this.log.debug('receive message: ', message)
    if (message.seq_reply! > 0) {
      if (this.queueRequest.has(message.seq_reply!)) {
        const promise = this.queueRequest.get(message.seq_reply!)
        this.queueRequest.delete(message.seq_reply!)
        if (message.status === Response.STATUS_OK) {
          promise!.resolve(message.data)
        } else {
          promise!.reject(message.error!)
        }
      }
    } else {
      switch (message.event) {
        case WEBSOCKET_EVENT_HELLO:
          await this.connected(message.data as ConnectionInfo)
          this.log.debug(
            `opened session ${this.connectionInfo.sock_id} for userId=${
              this.connectionInfo.session.user_id
            }`
          )
          break
        case WEBSOCKET_EVENT_CALL:
          await this.handleCallEvents(message.data.call as CallEventData)
          break
        case WEBSOCKET_EVENT_CHAT:
          await this.handleChatEvents(message.data as ChatEvent)
          break
        case WEBSOCKET_EVENT_USER_STATE:
          this.handleUserStateEvent(message.data.state as UserStatus)
          break

        case WEBSOCKET_EVENT_SIP:
          this.eventHandler.emit(WEBSOCKET_EVENT_SIP, message.data)
          break

        case WEBSOCKET_EVENT_AGENT_STATUS:
          this.handleAgentStatus(message.data as AgentStatusEvent)
          break
        case WEBSOCKET_EVENT_CHANNEL_STATUS:
          this.handleChannelEvents(message.data as ChannelEvent)
          break
        default:
          this.log.error(`event ${message.event} not handler`)
      }
    }
  }

  private handleAgentStatus(e: AgentStatusEvent) {
    if (this.agent && e.agent_id === this.agent.agentId) {
      this.agent.setStatus(e)
    }

    this.eventHandler.emit(WEBSOCKET_EVENT_AGENT_STATUS, e)
  }

  private handleChannelEvents(e: ChannelEvent) {
    if (this.agent) {
      const task = this.agent.onChannelEvent(e) || undefined
      this.eventHandler.emit(TASK_EVENT, e.status, task)
    }
  }

  private async connected(info: ConnectionInfo) {
    this.connectionInfo = info

    if (!this.useWebPhone()) {
      return
    }

    return this.registerCallClient(
      new SipPhone(this.instanceId, this._config.debug)
    )
  }

  private callBySession(session: CallSession): Call | undefined {
    for (const call of this.allCall()) {
      if (call.sip === session) {
        return call
      }
    }
  }

  private async onNewCallSession(session: CallSession) {
    let call: Call | undefined
    if (session.callId) {
      call = this.callById(session.callId)
    } else {
      call = this.callBySipId(session.id)
    }

    if (call) {
      call.setSip(session)
      await this.checkAutoAnswer(call)
    }
  }

  private async checkAutoAnswer(call: Call) {
    if (!document.hidden && call.autoAnswer) {
      return call.answer({
        video: call.params.video,
        screen: call.params.screen,
        disableStun: call.params.disableStun,
      })
    }
  }

  private connectToSocket(): Promise<Error | null> {
    return new Promise<Error | null>((resolve, reject) => {
      try {
        this.socket = new Socket(this._config.endpoint)
        this.socket.connect(this._config.token!)
      } catch (e) {
        reject(e)

        return
      }

      this.socket.on('message', this.onMessage.bind(this))
      this.socket.on('close', (code: number) => {
        this.log.error('socket close code: ', code)
        this.eventHandler.off('*')
        this.emit('disconnected', code)
        reject(new Error(`close socket code: ${code}`))
      })
      this.socket.on('open', () => {
        resolve(null)
      })
    })
  }

  private handleUserStateEvent(event: UserStatus) {
    this.eventHandler.emit(WEBSOCKET_EVENT_USER_STATE, event)
  }

  private async handleCallEvents(event: CallEventData) {
    let call: Call | undefined

    switch (event.event) {
      case CallActions.Ringing:
        call = new Call(this, event)

        this.callStore.set(call.id, call)
        await this.checkAutoAnswer(call)
        break

      case CallActions.Active:
        call = this.callById(event.id)
        if (call) {
          call.setActive(event)
        }
        break

      case CallActions.Bridge:
        call = this.callById(event.id)
        if (call) {
          call.setBridged(event)
        }
        break

      case CallActions.Execute:
        call = this.callById(event.id)
        if (call) {
          call.setExecute(event.data as CallEventExecute)
        }
        break

      case CallActions.DTMF:
        call = this.callById(event.id)
        if (call) {
          call.addDigit(event.data as CallEventDTMF)
        }
        break

      case CallActions.Voice:
        call = this.callById(event.id)
        if (call) {
          call.setVoice()
        }
        break

      case CallActions.Silence:
        call = this.callById(event.id)
        if (call) {
          call.setSilence()
        }
        break

      case CallActions.Hold:
        call = this.callById(event.id)
        if (call) {
          call.setHold(event)
        }
        break

      case CallActions.Hangup:
        call = this.callById(event.id)
        if (call) {
          call.setHangup(event)
        }
        break

      default:
        throw new Error('Unhandled action')
    }

    if (call) {
      this.eventHandler.emit(WEBSOCKET_EVENT_CALL, event.event, call)

      if (this.callDestroyed(call)) {
        this.destroyCall(call)
      }
    }
  }

  private async handleChatEvents(event: ChatEvent) {
    let conversation: Conversation | undefined

    switch (event.action) {
      case ChatActions.UserInvite:
        conversation = new Conversation(this, event.data as InviteEvent)
        this.conversationStore.set(conversation.id, conversation)
        break

      case ChatActions.Joined:
        const joined = event.data as JoinedEvent
        conversation = this.conversationById(joined.conversation_id)
        if (conversation) {
          conversation.setChannelId(joined.self_channel_id)
        }

        break

      case ChatActions.Message:
        const message = event.data as MessageEvent
        conversation = this.conversationById(message.conversation_id)
        if (conversation) {
          conversation.newMessage(message)
        }
        break

      case ChatActions.Close:
      case ChatActions.Leave:
      case ChatActions.Decline:
        const e = event.data as BaseChatEvent
        conversation = this.conversationById(e.conversation_id)
        break

      default:
    }

    if (conversation) {
      this.eventHandler.emit(WEBSOCKET_EVENT_CHAT, event.action, conversation)
    }
  }

  private hasAgentTask(call: Call): boolean {
    if (!this.agent || !call.task) {
      return false
    }

    return this.agent.hasTask(call.task)
  }

  private destroyCall(call: Call) {
    // FIXME sync channel & call event
    this.callStore.delete(call.id)
    this.eventHandler.emit(WEBSOCKET_EVENT_CALL, CallActions.Destroy, call)
  }
}
