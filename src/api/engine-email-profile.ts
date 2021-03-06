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
 * @interface EngineEmailProfile
 */
export interface EngineEmailProfile {
  /**
   *
   * @type {string}
   * @memberof EngineEmailProfile
   */
  created_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineEmailProfile
   */
  created_by?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineEmailProfile
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof EngineEmailProfile
   */
  domain_id?: string
  /**
   *
   * @type {boolean}
   * @memberof EngineEmailProfile
   */
  enabled?: boolean
  /**
   *
   * @type {string}
   * @memberof EngineEmailProfile
   */
  host?: string
  /**
   *
   * @type {string}
   * @memberof EngineEmailProfile
   */
  id?: string
  /**
   *
   * @type {number}
   * @memberof EngineEmailProfile
   */
  imap_port?: number
  /**
   *
   * @type {string}
   * @memberof EngineEmailProfile
   */
  login?: string
  /**
   *
   * @type {string}
   * @memberof EngineEmailProfile
   */
  mailbox?: string
  /**
   *
   * @type {string}
   * @memberof EngineEmailProfile
   */
  name?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineEmailProfile
   */
  schema?: EngineLookup
  /**
   *
   * @type {number}
   * @memberof EngineEmailProfile
   */
  smtp_port?: number
  /**
   *
   * @type {string}
   * @memberof EngineEmailProfile
   */
  updated_at?: string
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineEmailProfile
   */
  updated_by?: EngineLookup
}
