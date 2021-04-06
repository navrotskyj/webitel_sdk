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

import { EngineQueueReportGeneral } from './engine-queue-report-general'
import { EngineQueueReportGeneralAgentStatus } from './engine-queue-report-general-agent-status'

/**
 *
 * @export
 * @interface EngineListReportGeneral
 */
export interface EngineListReportGeneral {
  /**
   *
   * @type {EngineQueueReportGeneralAgentStatus}
   * @memberof EngineListReportGeneral
   */
  aggs?: EngineQueueReportGeneralAgentStatus
  /**
   *
   * @type {Array<EngineQueueReportGeneral>}
   * @memberof EngineListReportGeneral
   */
  items?: Array<EngineQueueReportGeneral>
  /**
   *
   * @type {boolean}
   * @memberof EngineListReportGeneral
   */
  next?: boolean
}
