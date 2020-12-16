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
   * @type {Array<EngineAgentChannel>}
   * @memberof EngineAgent
   */
  channels?: Array<EngineAgentChannel>
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
   * @type {EngineLookup}
   * @memberof EngineAgent
   */
  user?: EngineLookup
}
