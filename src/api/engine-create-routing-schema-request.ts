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

/**
 *
 * @export
 * @interface EngineCreateRoutingSchemaRequest
 */
export interface EngineCreateRoutingSchemaRequest {
  /**
   *
   * @type {boolean}
   * @memberof EngineCreateRoutingSchemaRequest
   */
  debug?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineCreateRoutingSchemaRequest
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateRoutingSchemaRequest
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateRoutingSchemaRequest
   */
  name?: string
  /**
   *
   * @type {object}
   * @memberof EngineCreateRoutingSchemaRequest
   */
  payload?: object
  /**
   *
   * @type {object}
   * @memberof EngineCreateRoutingSchemaRequest
   */
  schema?: object
  /**
   *
   * @type {number}
   * @memberof EngineCreateRoutingSchemaRequest
   */
  type?: number
}
