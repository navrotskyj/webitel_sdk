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
 * @interface EngineUpdateResourceTeamSkillRequest
 */
export interface EngineUpdateResourceTeamSkillRequest {
  /**
   *
   * @type {Array<EngineLookup>}
   * @memberof EngineUpdateResourceTeamSkillRequest
   */
  buckets?: Array<EngineLookup>
  /**
   *
   * @type {string}
   * @memberof EngineUpdateResourceTeamSkillRequest
   */
  domain_id?: string
  /**
   *
   * @type {string}
   * @memberof EngineUpdateResourceTeamSkillRequest
   */
  id?: string
  /**
   *
   * @type {number}
   * @memberof EngineUpdateResourceTeamSkillRequest
   */
  lvl?: number
  /**
   *
   * @type {number}
   * @memberof EngineUpdateResourceTeamSkillRequest
   */
  max_capacity?: number
  /**
   *
   * @type {number}
   * @memberof EngineUpdateResourceTeamSkillRequest
   */
  min_capacity?: number
  /**
   *
   * @type {EngineLookup}
   * @memberof EngineUpdateResourceTeamSkillRequest
   */
  skill?: EngineLookup
  /**
   *
   * @type {string}
   * @memberof EngineUpdateResourceTeamSkillRequest
   */
  team_id?: string
}