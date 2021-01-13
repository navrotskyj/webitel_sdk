// tslint:disable
/**
 * Webitel engine API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2019.0.0
 * Contact: support@webitel.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineAgentStatsStatistic
 */
export interface EngineAgentStatsStatistic {
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatsStatistic
   */
  active_call_id?: string
  /**
   *
   * @type {number}
   * @memberof EngineAgentStatsStatistic
   */
  agent_id?: number
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatsStatistic
   */
  call_time?: string
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatsStatistic
   */
  extension?: string
  /**
   *
   * @type {number}
   * @memberof EngineAgentStatsStatistic
   */
  handles?: number
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatsStatistic
   */
  max_bridged_at?: string
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatsStatistic
   */
  max_offering_at?: string
  /**
   *
   * @type {number}
   * @memberof EngineAgentStatsStatistic
   */
  missed?: number
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatsStatistic
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatsStatistic
   */
  offline?: string
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatsStatistic
   */
  online?: string
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatsStatistic
   */
  pause?: string
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EngineAgentStatsStatistic
   */
  queues?: Array<EngineLookup>
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatsStatistic
   */
  status?: string
  /**
   *
   * @type {string}
   * @memberof EngineAgentStatsStatistic
   */
  status_duration?: string
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EngineAgentStatsStatistic
   */
  teams?: Array<EngineLookup>
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineAgentStatsStatistic
   */
  user?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineAgentStatsStatistic
   */
  utilization?: number
}