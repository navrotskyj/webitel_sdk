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
 * @interface EngineQueueBucket
 */
export interface EngineQueueBucket {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineQueueBucket
   */
  bucket?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineQueueBucket
   */
  id?: string
  /**
   *
   * @type {number}
   * @memberof EngineQueueBucket
   */
  ratio?: number
}
