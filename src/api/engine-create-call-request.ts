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

import { CreateCallRequestCallSettings } from './create-call-request-call-settings'
import { CreateCallRequestEndpointRequest } from './create-call-request-endpoint-request'

/**
 *
 * @export
 * @interface EngineCreateCallRequest
 */
export interface EngineCreateCallRequest {
  /**
   *
   * @type {string}
   * @memberof EngineCreateCallRequest
   */
  destination?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateCallRequest
   */
  domain_id?: string
  /**
   *
   * @type {CreateCallRequestEndpointRequest}
   * @memberof EngineCreateCallRequest
   */
  from?: CreateCallRequestEndpointRequest
  /**
   *
   * @type {CreateCallRequestCallSettings}
   * @memberof EngineCreateCallRequest
   */
  params?: CreateCallRequestCallSettings
  /**
   *
   * @type {CreateCallRequestEndpointRequest}
   * @memberof EngineCreateCallRequest
   */
  to?: CreateCallRequestEndpointRequest
}
