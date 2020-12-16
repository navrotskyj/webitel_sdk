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
 * @interface EngineCreateOutboundResourceInGroupRequest
 */
export interface EngineCreateOutboundResourceInGroupRequest {
  /**
   *
   * @type {string}
   * @memberof EngineCreateOutboundResourceInGroupRequest
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateOutboundResourceInGroupRequest
   */
  group_id?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateOutboundResourceInGroupRequest
   */
  resource?: EngineLookup
}
