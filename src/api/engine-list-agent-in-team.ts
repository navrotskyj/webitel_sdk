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

import { EngineAgentInTeam } from './engine-agent-in-team'

/**
 *
 * @export
 * @interface EngineListAgentInTeam
 */
export interface EngineListAgentInTeam {
  /**
   *
   * @type {Array<EngineAgentInTeam>}
   * @memberof EngineListAgentInTeam
   */
  items?: Array<EngineAgentInTeam>
  /**
   *
   * @type {boolean}
   * @memberof EngineListAgentInTeam
   */
  next?: boolean
}