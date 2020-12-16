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

import * as globalImportUrl from 'url'
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios'
import { Configuration } from '../configuration'
// Some imports not used depending on template conditions
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from '../base'
// @ts-ignore
import { EngineCreateEmailProfileRequest } from '../api'
// @ts-ignore
import { EngineEmailProfile } from '../api'
// @ts-ignore
import { EngineListEmailProfile } from '../api'
// @ts-ignore
import { EngineUpdateEmailProfileRequest } from '../api'
/**
 * EmailProfileServiceApi - axios parameter creator
 * @export
 */
export const EmailProfileServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create EmailProfile
     * @param {EngineCreateEmailProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createEmailProfile: async (
      body: EngineCreateEmailProfileRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createEmailProfile.'
        )
      }
      const localVarPath = `/email/profile`
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication AccessToken required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === 'function'
            ? await configuration.apiKey('X-Webitel-Access')
            : await configuration.apiKey
        localVarHeaderParameter['X-Webitel-Access'] = localVarApiKeyValue
      }

      localVarHeaderParameter['Content-Type'] = 'application/json'

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      }
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      const needsSerialization =
        typeof body !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json'
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || ''

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Remove EmailProfile
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteEmailProfile: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteEmailProfile.'
        )
      }
      const localVarPath = `/email/profile/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication AccessToken required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === 'function'
            ? await configuration.apiKey('X-Webitel-Access')
            : await configuration.apiKey
        localVarHeaderParameter['X-Webitel-Access'] = localVarApiKeyValue
      }

      if (domainId !== undefined) {
        localVarQueryParameter['domain_id'] = domainId
      }

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      }
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary EmailProfile item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readEmailProfile: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readEmailProfile.'
        )
      }
      const localVarPath = `/email/profile/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication AccessToken required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === 'function'
            ? await configuration.apiKey('X-Webitel-Access')
            : await configuration.apiKey
        localVarHeaderParameter['X-Webitel-Access'] = localVarApiKeyValue
      }

      if (domainId !== undefined) {
        localVarQueryParameter['domain_id'] = domainId
      }

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      }
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Search EmailProfile
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchEmailProfile: async (
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      fields?: Array<string>,
      sort?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/email/profile`
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication AccessToken required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === 'function'
            ? await configuration.apiKey('X-Webitel-Access')
            : await configuration.apiKey
        localVarHeaderParameter['X-Webitel-Access'] = localVarApiKeyValue
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
      }

      if (size !== undefined) {
        localVarQueryParameter['size'] = size
      }

      if (q !== undefined) {
        localVarQueryParameter['q'] = q
      }

      if (domainId !== undefined) {
        localVarQueryParameter['domain_id'] = domainId
      }

      if (fields) {
        localVarQueryParameter['fields'] = fields
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      }
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Update EmailProfile
     * @param {string} id
     * @param {EngineUpdateEmailProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateEmailProfile: async (
      id: string,
      body: EngineUpdateEmailProfileRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateEmailProfile.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateEmailProfile.'
        )
      }
      const localVarPath = `/email/profile/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication AccessToken required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === 'function'
            ? await configuration.apiKey('X-Webitel-Access')
            : await configuration.apiKey
        localVarHeaderParameter['X-Webitel-Access'] = localVarApiKeyValue
      }

      localVarHeaderParameter['Content-Type'] = 'application/json'

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      }
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      const needsSerialization =
        typeof body !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json'
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || ''

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * EmailProfileServiceApi - functional programming interface
 * @export
 */
export const EmailProfileServiceApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create EmailProfile
     * @param {EngineCreateEmailProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createEmailProfile(
      body: EngineCreateEmailProfileRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineEmailProfile>
    > {
      const localVarAxiosArgs = await EmailProfileServiceApiAxiosParamCreator(
        configuration
      ).createEmailProfile(body, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @summary Remove EmailProfile
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteEmailProfile(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineEmailProfile>
    > {
      const localVarAxiosArgs = await EmailProfileServiceApiAxiosParamCreator(
        configuration
      ).deleteEmailProfile(id, domainId, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @summary EmailProfile item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readEmailProfile(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineEmailProfile>
    > {
      const localVarAxiosArgs = await EmailProfileServiceApiAxiosParamCreator(
        configuration
      ).readEmailProfile(id, domainId, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @summary Search EmailProfile
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchEmailProfile(
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      fields?: Array<string>,
      sort?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListEmailProfile>
    > {
      const localVarAxiosArgs = await EmailProfileServiceApiAxiosParamCreator(
        configuration
      ).searchEmailProfile(page, size, q, domainId, fields, sort, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     *
     * @summary Update EmailProfile
     * @param {string} id
     * @param {EngineUpdateEmailProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateEmailProfile(
      id: string,
      body: EngineUpdateEmailProfileRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineEmailProfile>
    > {
      const localVarAxiosArgs = await EmailProfileServiceApiAxiosParamCreator(
        configuration
      ).updateEmailProfile(id, body, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
  }
}

/**
 * EmailProfileServiceApi - factory interface
 * @export
 */
export const EmailProfileServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create EmailProfile
     * @param {EngineCreateEmailProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createEmailProfile(
      body: EngineCreateEmailProfileRequest,
      options?: any
    ): AxiosPromise<EngineEmailProfile> {
      return EmailProfileServiceApiFp(configuration)
        .createEmailProfile(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Remove EmailProfile
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteEmailProfile(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineEmailProfile> {
      return EmailProfileServiceApiFp(configuration)
        .deleteEmailProfile(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary EmailProfile item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readEmailProfile(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineEmailProfile> {
      return EmailProfileServiceApiFp(configuration)
        .readEmailProfile(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Search EmailProfile
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {Array<string>} [fields]
     * @param {string} [sort]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchEmailProfile(
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      fields?: Array<string>,
      sort?: string,
      options?: any
    ): AxiosPromise<EngineListEmailProfile> {
      return EmailProfileServiceApiFp(configuration)
        .searchEmailProfile(page, size, q, domainId, fields, sort, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update EmailProfile
     * @param {string} id
     * @param {EngineUpdateEmailProfileRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateEmailProfile(
      id: string,
      body: EngineUpdateEmailProfileRequest,
      options?: any
    ): AxiosPromise<EngineEmailProfile> {
      return EmailProfileServiceApiFp(configuration)
        .updateEmailProfile(id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * EmailProfileServiceApi - object-oriented interface
 * @export
 * @class EmailProfileServiceApi
 * @extends {BaseAPI}
 */
export class EmailProfileServiceApi extends BaseAPI {
  /**
   *
   * @summary Create EmailProfile
   * @param {EngineCreateEmailProfileRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmailProfileServiceApi
   */
  public createEmailProfile(
    body: EngineCreateEmailProfileRequest,
    options?: any
  ) {
    return EmailProfileServiceApiFp(this.configuration)
      .createEmailProfile(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Remove EmailProfile
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmailProfileServiceApi
   */
  public deleteEmailProfile(id: string, domainId?: string, options?: any) {
    return EmailProfileServiceApiFp(this.configuration)
      .deleteEmailProfile(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary EmailProfile item
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmailProfileServiceApi
   */
  public readEmailProfile(id: string, domainId?: string, options?: any) {
    return EmailProfileServiceApiFp(this.configuration)
      .readEmailProfile(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Search EmailProfile
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [domainId]
   * @param {Array<string>} [fields]
   * @param {string} [sort]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmailProfileServiceApi
   */
  public searchEmailProfile(
    page?: number,
    size?: number,
    q?: string,
    domainId?: string,
    fields?: Array<string>,
    sort?: string,
    options?: any
  ) {
    return EmailProfileServiceApiFp(this.configuration)
      .searchEmailProfile(page, size, q, domainId, fields, sort, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update EmailProfile
   * @param {string} id
   * @param {EngineUpdateEmailProfileRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmailProfileServiceApi
   */
  public updateEmailProfile(
    id: string,
    body: EngineUpdateEmailProfileRequest,
    options?: any
  ) {
    return EmailProfileServiceApiFp(this.configuration)
      .updateEmailProfile(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
