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

import { EngineCalendar } from './engine-calendar'

/**
 *
 * @export
 * @interface EngineListCalendar
 */
export interface EngineListCalendar {
  /**
   *
   * @type {Array<EngineCalendar>}
   * @memberof EngineListCalendar
   */
  items?: Array<EngineCalendar>
  /**
   *
   * @type {boolean}
   * @memberof EngineListCalendar
   */
  next?: boolean
}
