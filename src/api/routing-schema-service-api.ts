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
import { EngineCreateRoutingSchemaRequest } from '../api'
// @ts-ignore
import { EngineListRoutingSchema } from '../api'
// @ts-ignore
import { EnginePatchRoutingSchemaRequest } from '../api'
// @ts-ignore
import { EngineRoutingSchema } from '../api'
// @ts-ignore
import { EngineUpdateRoutingSchemaRequest } from '../api'
/**
 * RoutingSchemaServiceApi - axios parameter creator
 * @export
 */
export const RoutingSchemaServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create RoutingSchema
     * @param {EngineCreateRoutingSchemaRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRoutingSchema: async (
      body: EngineCreateRoutingSchemaRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createRoutingSchema.'
        )
      }
      const localVarPath = `/routing/schema`
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
     * @summary Remove RoutingSchema
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRoutingSchema: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteRoutingSchema.'
        )
      }
      const localVarPath = `/routing/schema/{id}`.replace(
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
     * @summary Patch RoutingSchema
     * @param {string} id
     * @param {EnginePatchRoutingSchemaRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchRoutingSchema: async (
      id: string,
      body: EnginePatchRoutingSchemaRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling patchRoutingSchema.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling patchRoutingSchema.'
        )
      }
      const localVarPath = `/routing/schema/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'PATCH',
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
     * @summary RoutingSchema item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readRoutingSchema: async (
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readRoutingSchema.'
        )
      }
      const localVarPath = `/routing/schema/{id}`.replace(
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
     * @summary List RoutingSchema
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchRoutingSchema: async (
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/routing/schema`
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
     * @summary Update RoutingSchema
     * @param {string} id
     * @param {EngineUpdateRoutingSchemaRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRoutingSchema: async (
      id: string,
      body: EngineUpdateRoutingSchemaRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateRoutingSchema.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateRoutingSchema.'
        )
      }
      const localVarPath = `/routing/schema/{id}`.replace(
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
 * RoutingSchemaServiceApi - functional programming interface
 * @export
 */
export const RoutingSchemaServiceApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create RoutingSchema
     * @param {EngineCreateRoutingSchemaRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRoutingSchema(
      body: EngineCreateRoutingSchemaRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineRoutingSchema>
    > {
      const localVarAxiosArgs = await RoutingSchemaServiceApiAxiosParamCreator(
        configuration
      ).createRoutingSchema(body, options)
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
     * @summary Remove RoutingSchema
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteRoutingSchema(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineRoutingSchema>
    > {
      const localVarAxiosArgs = await RoutingSchemaServiceApiAxiosParamCreator(
        configuration
      ).deleteRoutingSchema(id, domainId, options)
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
     * @summary Patch RoutingSchema
     * @param {string} id
     * @param {EnginePatchRoutingSchemaRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async patchRoutingSchema(
      id: string,
      body: EnginePatchRoutingSchemaRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineRoutingSchema>
    > {
      const localVarAxiosArgs = await RoutingSchemaServiceApiAxiosParamCreator(
        configuration
      ).patchRoutingSchema(id, body, options)
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
     * @summary RoutingSchema item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readRoutingSchema(
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineRoutingSchema>
    > {
      const localVarAxiosArgs = await RoutingSchemaServiceApiAxiosParamCreator(
        configuration
      ).readRoutingSchema(id, domainId, options)
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
     * @summary List RoutingSchema
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchRoutingSchema(
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListRoutingSchema>
    > {
      const localVarAxiosArgs = await RoutingSchemaServiceApiAxiosParamCreator(
        configuration
      ).searchRoutingSchema(page, size, q, domainId, options)
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
     * @summary Update RoutingSchema
     * @param {string} id
     * @param {EngineUpdateRoutingSchemaRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateRoutingSchema(
      id: string,
      body: EngineUpdateRoutingSchemaRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineRoutingSchema>
    > {
      const localVarAxiosArgs = await RoutingSchemaServiceApiAxiosParamCreator(
        configuration
      ).updateRoutingSchema(id, body, options)
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
 * RoutingSchemaServiceApi - factory interface
 * @export
 */
export const RoutingSchemaServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create RoutingSchema
     * @param {EngineCreateRoutingSchemaRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRoutingSchema(
      body: EngineCreateRoutingSchemaRequest,
      options?: any
    ): AxiosPromise<EngineRoutingSchema> {
      return RoutingSchemaServiceApiFp(configuration)
        .createRoutingSchema(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Remove RoutingSchema
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRoutingSchema(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineRoutingSchema> {
      return RoutingSchemaServiceApiFp(configuration)
        .deleteRoutingSchema(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Patch RoutingSchema
     * @param {string} id
     * @param {EnginePatchRoutingSchemaRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchRoutingSchema(
      id: string,
      body: EnginePatchRoutingSchemaRequest,
      options?: any
    ): AxiosPromise<EngineRoutingSchema> {
      return RoutingSchemaServiceApiFp(configuration)
        .patchRoutingSchema(id, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary RoutingSchema item
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readRoutingSchema(
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineRoutingSchema> {
      return RoutingSchemaServiceApiFp(configuration)
        .readRoutingSchema(id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary List RoutingSchema
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchRoutingSchema(
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineListRoutingSchema> {
      return RoutingSchemaServiceApiFp(configuration)
        .searchRoutingSchema(page, size, q, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update RoutingSchema
     * @param {string} id
     * @param {EngineUpdateRoutingSchemaRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRoutingSchema(
      id: string,
      body: EngineUpdateRoutingSchemaRequest,
      options?: any
    ): AxiosPromise<EngineRoutingSchema> {
      return RoutingSchemaServiceApiFp(configuration)
        .updateRoutingSchema(id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * RoutingSchemaServiceApi - object-oriented interface
 * @export
 * @class RoutingSchemaServiceApi
 * @extends {BaseAPI}
 */
export class RoutingSchemaServiceApi extends BaseAPI {
  /**
   *
   * @summary Create RoutingSchema
   * @param {EngineCreateRoutingSchemaRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoutingSchemaServiceApi
   */
  public createRoutingSchema(
    body: EngineCreateRoutingSchemaRequest,
    options?: any
  ) {
    return RoutingSchemaServiceApiFp(this.configuration)
      .createRoutingSchema(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Remove RoutingSchema
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoutingSchemaServiceApi
   */
  public deleteRoutingSchema(id: string, domainId?: string, options?: any) {
    return RoutingSchemaServiceApiFp(this.configuration)
      .deleteRoutingSchema(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Patch RoutingSchema
   * @param {string} id
   * @param {EnginePatchRoutingSchemaRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoutingSchemaServiceApi
   */
  public patchRoutingSchema(
    id: string,
    body: EnginePatchRoutingSchemaRequest,
    options?: any
  ) {
    return RoutingSchemaServiceApiFp(this.configuration)
      .patchRoutingSchema(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary RoutingSchema item
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoutingSchemaServiceApi
   */
  public readRoutingSchema(id: string, domainId?: string, options?: any) {
    return RoutingSchemaServiceApiFp(this.configuration)
      .readRoutingSchema(id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary List RoutingSchema
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoutingSchemaServiceApi
   */
  public searchRoutingSchema(
    page?: number,
    size?: number,
    q?: string,
    domainId?: string,
    options?: any
  ) {
    return RoutingSchemaServiceApiFp(this.configuration)
      .searchRoutingSchema(page, size, q, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update RoutingSchema
   * @param {string} id
   * @param {EngineUpdateRoutingSchemaRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoutingSchemaServiceApi
   */
  public updateRoutingSchema(
    id: string,
    body: EngineUpdateRoutingSchemaRequest,
    options?: any
  ) {
    return RoutingSchemaServiceApiFp(this.configuration)
      .updateRoutingSchema(id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
