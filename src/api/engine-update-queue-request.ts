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
 * @interface EngineUpdateQueueRequest
 */
export interface EngineUpdateQueueRequest {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  after_schema?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  calendar?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineUpdateQueueRequest
   */
  description?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  dnc_list?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  do_schema?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineUpdateQueueRequest
   */
  domain_id?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineUpdateQueueRequest
   */
  enabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineUpdateQueueRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateQueueRequest
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof EngineUpdateQueueRequest
   */
  payload?: object
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueRequest
   */
  priority?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  ringtone?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  schema?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueRequest
   */
  sec_locate_agent?: number
  /**
   *
   * @type {string}
   * @memberof EngineUpdateQueueRequest
   */
  strategy?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateQueueRequest
   */
  team?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueRequest
   */
  timeout?: number
  /**
   *
   * @type {number}
   * @memberof EngineUpdateQueueRequest
   */
  type?: number
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineUpdateQueueRequest
   */
  variables?: { [key: string]: string }
}