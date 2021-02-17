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
 * @interface EngineCreateQueueSkillRequest
 */
export interface EngineCreateQueueSkillRequest {
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EngineCreateQueueSkillRequest
   */
  buckets?: Array<EngineLookup>
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateQueueSkillRequest
   */
  disabled?: boolean
  /**
   *
   * @type {number}
   * @memberof EngineCreateQueueSkillRequest
   */
  lvl?: number
  /**
   *
   * @type {number}
   * @memberof EngineCreateQueueSkillRequest
   */
  max_capacity?: number
  /**
   *
   * @type {number}
   * @memberof EngineCreateQueueSkillRequest
   */
  min_capacity?: number
  /**
   *
   * @type {number}
   * @memberof EngineCreateQueueSkillRequest
   */
  queue_id?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateQueueSkillRequest
   */
  skill?: EngineLookup
}