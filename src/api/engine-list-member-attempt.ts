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

import { EngineMemberAttempt } from './engine-member-attempt'

/**
 *
 * @export
 * @interface EngineListMemberAttempt
 */
export interface EngineListMemberAttempt {
  /**
   *
   * @type {Array<EngineMemberAttempt>}
   * @memberof EngineListMemberAttempt
   */
  items?: Array<EngineMemberAttempt>
  /**
   *
   * @type {boolean}
   * @memberof EngineListMemberAttempt
   */
  next?: boolean
}
