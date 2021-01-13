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
import { EngineCreateSkillRequest } from '../api'
// @ts-ignore
import { EngineListSkill } from '../api'
// @ts-ignore
import { EngineSkill } from '../api'
// @ts-ignore
import { EngineUpdateSkillRequest } from '../api'
/**
 * SkillServiceApi - axios parameter creator
 * @export
 */
export const SkillServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create Skill
     * @param {EngineCreateSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSkill: async (
      body: EngineCreateSkillRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createSkill.'
        )
      }
      const localVarPath = `/call_center/skills`
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
     * @summary Remove Skill
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSkill: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteSkill.'
        )
      }
      const localVarPath = `/call_center/skills/{id}`.replace(
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
     * @summary Skill item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readSkill: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readSkill.'
        )
      }
      const localVarPath = `/call_center/skills/{id}`.replace(
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
     * @summary List of Skill
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSkill: async (
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/call_center/skills`
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
     * @summary Update Skill
     * @param {string} id
     * @param {EngineUpdateSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSkill: async (
      id: string,
      body: EngineUpdateSkillRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateSkill.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateSkill.'
        )
      }
      const localVarPath = `/call_center/skills/{id}`.replace(
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
 * SkillServiceApi - functional programming interface
 * @export
 */
export const SkillServiceApiFp = function(configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create Skill
     * @param {EngineCreateSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSkill(
      body: EngineCreateSkillRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineSkill>
    > {
      const localVarAxiosArgs = await SkillServiceApiAxiosParamCreator(
        configuration
      ).createSkill(body, options)
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
     * @summary Remove Skill
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSkill(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineSkill>
    > {
      const localVarAxiosArgs = await SkillServiceApiAxiosParamCreator(
        configuration
      ).deleteSkill(id, domainId, options)
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
     * @summary Skill item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readSkill(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineSkill>
    > {
      const localVarAxiosArgs = await SkillServiceApiAxiosParamCreator(
        configuration
      ).readSkill(id, domainId, options)
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
     * @summary List of Skill
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchSkill(
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListSkill>
    > {
      const localVarAxiosArgs = await SkillServiceApiAxiosParamCreator(
        configuration
      ).searchSkill(page, size, q, domainId, options)
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
     * @summary Update Skill
     * @param {string} id
     * @param {EngineUpdateSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSkill(
      id: string,
      body: EngineUpdateSkillRequest,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<EngineSkill>
    > {
      const localVarAxiosArgs = await SkillServiceApiAxiosParamCreator(
        configuration
      ).updateSkill(id, body, options)
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
 * SkillServiceApi - factory interface
 * @export
 */
export const SkillServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create Skill
     * @param {EngineCreateSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSkill(
      body: EngineCreateSkillRequest,
      options?: any
    ): AxiosPromise<EngineSkill> {
      return SkillServiceApiFp(configuration)
        .createSkill(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Remove Skill
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSkill(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineSkill> {
      return SkillServiceApiFp(configuration)
        .deleteSkill(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Skill item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readSkill(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineSkill> {
      return SkillServiceApiFp(configuration)
        .readSkill(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary List of Skill
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSkill(
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineListSkill> {
      return SkillServiceApiFp(configuration)
        .searchSkill(page, size, q, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update Skill
     * @param {string} id
     * @param {EngineUpdateSkillRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSkill(
      id: string,
      body: EngineUpdateSkillRequest,
      options?: any
    ): AxiosPromise<EngineSkill> {
      return SkillServiceApiFp(configuration)
        .updateSkill(id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * SkillServiceApi - object-oriented interface
 * @export
 * @class SkillServiceApi
 * @extends {BaseAPI}
 */
export class SkillServiceApi extends BaseAPI {
  /**
   *
   * @summary Create Skill
   * @param {EngineCreateSkillRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SkillServiceApi
   */
  public createSkill(body: EngineCreateSkillRequest, options?: any) {
    return SkillServiceApiFp(this.configuration)
      .createSkill(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Remove Skill
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SkillServiceApi
   */
  public deleteSkill(id: string, domainId?: string, options?: any) {
    return SkillServiceApiFp(this.configuration)
      .deleteSkill(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Skill item
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SkillServiceApi
   */
  public readSkill(id: string, domainId?: string, options?: any) {
    return SkillServiceApiFp(this.configuration)
      .readSkill(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary List of Skill
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SkillServiceApi
   */
  public searchSkill(
    page?: number,
    size?: number,
    q?: string,
    domainId?: string,
    options?: any
  ) {
    return SkillServiceApiFp(this.configuration)
      .searchSkill(page, size, q, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update Skill
   * @param {string} id
   * @param {EngineUpdateSkillRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SkillServiceApi
   */
  public updateSkill(
    id: string,
    body: EngineUpdateSkillRequest,
    options?: any
  ) {
    return SkillServiceApiFp(this.configuration)
      .updateSkill(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}