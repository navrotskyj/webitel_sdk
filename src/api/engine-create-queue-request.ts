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

import { EngineLookup } from './engine-lookup'

/**
 *
 * @export
 * @interface EngineCreateQueueRequest
 */
export interface EngineCreateQueueRequest {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateQueueRequest
   */
  after_schema?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateQueueRequest
   */
  calendar?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineCreateQueueRequest
   */
  description?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateQueueRequest
   */
  dnc_list?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateQueueRequest
   */
  do_schema?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineCreateQueueRequest
   */
  domain_id?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateQueueRequest
   */
  enabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineCreateQueueRequest
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof EngineCreateQueueRequest
   */
  payload?: object
  /**
   *
   * @type {number}
   * @memberof EngineCreateQueueRequest
   */
  priority?: number
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateQueueRequest
   */
  processing?: boolean
  /**
   *
   * @type {number}
   * @memberof EngineCreateQueueRequest
   */
  processing_renewal_sec?: number
  /**
   *
   * @type {number}
   * @memberof EngineCreateQueueRequest
   */
  processing_sec?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateQueueRequest
   */
  ringtone?: EngineLookup
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateQueueRequest
   */
  schema?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineCreateQueueRequest
   */
  sec_locate_agent?: number
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateQueueRequest
   */
  sticky_agent?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineCreateQueueRequest
   */
  strategy?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateQueueRequest
   */
  team?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineCreateQueueRequest
   */
  timeout?: number
  /**
   *
   * @type {number}
   * @memberof EngineCreateQueueRequest
   */
  type?: number
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EngineCreateQueueRequest
   */
  variables?: { [key: string]: string }
}
