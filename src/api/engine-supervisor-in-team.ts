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
 * @interface EngineSupervisorInTeam
 */
export interface EngineSupervisorInTeam {
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineSupervisorInTeam
   */
  agent?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineSupervisorInTeam
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineSupervisorInTeam
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof EngineSupervisorInTeam
   */
  team_id?: string
}
