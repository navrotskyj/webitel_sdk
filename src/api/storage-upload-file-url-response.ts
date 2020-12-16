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

import { StorageUploadStatusCode } from './storage-upload-status-code'

/**
 *
 * @export
 * @interface StorageUploadFileUrlResponse
 */
export interface StorageUploadFileUrlResponse {
  /**
   *
   * @type {StorageUploadStatusCode}
   * @memberof StorageUploadFileUrlResponse
   */
  code?: StorageUploadStatusCode
  /**
   *
   * @type {string}
   * @memberof StorageUploadFileUrlResponse
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof StorageUploadFileUrlResponse
   */
  mime?: string
  /**
   *
   * @type {string}
   * @memberof StorageUploadFileUrlResponse
   */
  size?: string
  /**
   *
   * @type {string}
   * @memberof StorageUploadFileUrlResponse
   */
  url?: string
}
