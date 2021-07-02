// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.12.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineAgentChannel } from './engine-agent-channel'
import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineAgent
 */
export interface EngineAgent {
  /**
   *
   * @type {Array<string>}
   * @memberof EngineAgent
   */
  allow_channels?: Array<string>
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EngineAgent
   */
  auditor?: Array<EngineLookup>
  /**
   *
   * @type {EngineAgentChannel}
   * @memberof EngineAgent
   */
  channel?: EngineAgentChannel
  /**
   *
   * @type {number}
   * @memberof EngineAgent
   */
  chat_count?: number
  /**
   *
   * @type {string}
   * @memberof EngineAgent
   */
  description?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAgent
   */
  greeting_media?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineAgent
   */
  id?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineAgent
   */
  is_supervisor?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineAgent
   */
  last_status_change?: string
  /**
   *
   * @type {string}
   * @memberof EngineAgent
   */
  name?: string
  /**
   *
   * @type {number}
   * @memberof EngineAgent
   */
  progressive_count?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAgent
   */
  region?: EngineLookup
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EngineAgent
   */
  skills?: Array<EngineLookup>
  /**
   *
   * @type {string}
   * @memberof EngineAgent
   */
  status?: string
  /**
   *
   * @type {string}
   * @memberof EngineAgent
   */
  status_duration?: string
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EngineAgent
   */
  supervisor?: Array<EngineLookup>
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAgent
   */
  team?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAgent
   */
  user?: EngineLookup
}
