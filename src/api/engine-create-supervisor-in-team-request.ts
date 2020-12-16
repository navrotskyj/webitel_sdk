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
 * @interface EngineCreateSupervisorInTeamRequest
 */
export interface EngineCreateSupervisorInTeamRequest {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineCreateSupervisorInTeamRequest
   */
  agent?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineCreateSupervisorInTeamRequest
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineCreateSupervisorInTeamRequest
   */
  team_id?: string
}
