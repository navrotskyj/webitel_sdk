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
import { EngineCreateSupervisorInTeamRequest } from '../api'
// @ts-ignore
import { EngineListSupervisorInTeam } from '../api'
// @ts-ignore
import { EngineSupervisorInTeam } from '../api'
// @ts-ignore
import { EngineUpdateSupervisorInTeamRequest } from '../api'
/**
 * SupervisorInTeamServiceApi - axios parameter creator
 * @export
 */
export const SupervisorInTeamServiceApiAxiosParamCreator = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create SupervisorInTeam
     * @param {string} teamId
     * @param {EngineCreateSupervisorInTeamRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSupervisorInTeam: async (
      teamId: string,
      body: EngineCreateSupervisorInTeamRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling createSupervisorInTeam.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling createSupervisorInTeam.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/supervisors`.replace(
        `{${'team_id'}}`,
        encodeURIComponent(String(teamId))
      )
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
     * @summary Remove SupervisorInTeam
     * @param {string} teamId
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSupervisorInTeam: async (
      teamId: string,
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling deleteSupervisorInTeam.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling deleteSupervisorInTeam.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/supervisors/{id}`
        .replace(`{${'team_id'}}`, encodeURIComponent(String(teamId)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * @summary SupervisorInTeam item
     * @param {string} teamId
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readSupervisorInTeam: async (
      teamId: string,
      id: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling readSupervisorInTeam.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling readSupervisorInTeam.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/supervisors/{id}`
        .replace(`{${'team_id'}}`, encodeURIComponent(String(teamId)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * @summary List of SupervisorInTeam
     * @param {string} teamId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSupervisorInTeam: async (
      teamId: string,
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling searchSupervisorInTeam.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/supervisors`.replace(
        `{${'team_id'}}`,
        encodeURIComponent(String(teamId))
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
     * @summary Update SupervisorInTeam
     * @param {string} teamId
     * @param {string} id
     * @param {EngineUpdateSupervisorInTeamRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSupervisorInTeam: async (
      teamId: string,
      id: string,
      body: EngineUpdateSupervisorInTeamRequest,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      if (teamId === null || teamId === undefined) {
        throw new RequiredError(
          'teamId',
          'Required parameter teamId was null or undefined when calling updateSupervisorInTeam.'
        )
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          'id',
          'Required parameter id was null or undefined when calling updateSupervisorInTeam.'
        )
      }
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling updateSupervisorInTeam.'
        )
      }
      const localVarPath = `/call_center/teams/{team_id}/supervisors/{id}`
        .replace(`{${'team_id'}}`, encodeURIComponent(String(teamId)))
        .replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
 * SupervisorInTeamServiceApi - functional programming interface
 * @export
 */
export const SupervisorInTeamServiceApiFp = function(
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create SupervisorInTeam
     * @param {string} teamId
     * @param {EngineCreateSupervisorInTeamRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSupervisorInTeam(
      teamId: string,
      body: EngineCreateSupervisorInTeamRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineSupervisorInTeam>
    > {
      const localVarAxiosArgs = await SupervisorInTeamServiceApiAxiosParamCreator(
        configuration
      ).createSupervisorInTeam(teamId, body, options)
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
     * @summary Remove SupervisorInTeam
     * @param {string} teamId
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSupervisorInTeam(
      teamId: string,
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineSupervisorInTeam>
    > {
      const localVarAxiosArgs = await SupervisorInTeamServiceApiAxiosParamCreator(
        configuration
      ).deleteSupervisorInTeam(teamId, id, domainId, options)
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
     * @summary SupervisorInTeam item
     * @param {string} teamId
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async readSupervisorInTeam(
      teamId: string,
      id: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineSupervisorInTeam>
    > {
      const localVarAxiosArgs = await SupervisorInTeamServiceApiAxiosParamCreator(
        configuration
      ).readSupervisorInTeam(teamId, id, domainId, options)
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
     * @summary List of SupervisorInTeam
     * @param {string} teamId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchSupervisorInTeam(
      teamId: string,
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineListSupervisorInTeam>
    > {
      const localVarAxiosArgs = await SupervisorInTeamServiceApiAxiosParamCreator(
        configuration
      ).searchSupervisorInTeam(teamId, page, size, q, domainId, options)
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
     * @summary Update SupervisorInTeam
     * @param {string} teamId
     * @param {string} id
     * @param {EngineUpdateSupervisorInTeamRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSupervisorInTeam(
      teamId: string,
      id: string,
      body: EngineUpdateSupervisorInTeamRequest,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<EngineSupervisorInTeam>
    > {
      const localVarAxiosArgs = await SupervisorInTeamServiceApiAxiosParamCreator(
        configuration
      ).updateSupervisorInTeam(teamId, id, body, options)
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
 * SupervisorInTeamServiceApi - factory interface
 * @export
 */
export const SupervisorInTeamServiceApiFactory = function(
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create SupervisorInTeam
     * @param {string} teamId
     * @param {EngineCreateSupervisorInTeamRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSupervisorInTeam(
      teamId: string,
      body: EngineCreateSupervisorInTeamRequest,
      options?: any
    ): AxiosPromise<EngineSupervisorInTeam> {
      return SupervisorInTeamServiceApiFp(configuration)
        .createSupervisorInTeam(teamId, body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Remove SupervisorInTeam
     * @param {string} teamId
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSupervisorInTeam(
      teamId: string,
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineSupervisorInTeam> {
      return SupervisorInTeamServiceApiFp(configuration)
        .deleteSupervisorInTeam(teamId, id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary SupervisorInTeam item
     * @param {string} teamId
     * @param {string} id
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readSupervisorInTeam(
      teamId: string,
      id: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineSupervisorInTeam> {
      return SupervisorInTeamServiceApiFp(configuration)
        .readSupervisorInTeam(teamId, id, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary List of SupervisorInTeam
     * @param {string} teamId
     * @param {number} [page]
     * @param {number} [size]
     * @param {string} [q]
     * @param {string} [domainId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSupervisorInTeam(
      teamId: string,
      page?: number,
      size?: number,
      q?: string,
      domainId?: string,
      options?: any
    ): AxiosPromise<EngineListSupervisorInTeam> {
      return SupervisorInTeamServiceApiFp(configuration)
        .searchSupervisorInTeam(teamId, page, size, q, domainId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update SupervisorInTeam
     * @param {string} teamId
     * @param {string} id
     * @param {EngineUpdateSupervisorInTeamRequest} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSupervisorInTeam(
      teamId: string,
      id: string,
      body: EngineUpdateSupervisorInTeamRequest,
      options?: any
    ): AxiosPromise<EngineSupervisorInTeam> {
      return SupervisorInTeamServiceApiFp(configuration)
        .updateSupervisorInTeam(teamId, id, body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * SupervisorInTeamServiceApi - object-oriented interface
 * @export
 * @class SupervisorInTeamServiceApi
 * @extends {BaseAPI}
 */
export class SupervisorInTeamServiceApi extends BaseAPI {
  /**
   *
   * @summary Create SupervisorInTeam
   * @param {string} teamId
   * @param {EngineCreateSupervisorInTeamRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SupervisorInTeamServiceApi
   */
  public createSupervisorInTeam(
    teamId: string,
    body: EngineCreateSupervisorInTeamRequest,
    options?: any
  ) {
    return SupervisorInTeamServiceApiFp(this.configuration)
      .createSupervisorInTeam(teamId, body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Remove SupervisorInTeam
   * @param {string} teamId
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SupervisorInTeamServiceApi
   */
  public deleteSupervisorInTeam(
    teamId: string,
    id: string,
    domainId?: string,
    options?: any
  ) {
    return SupervisorInTeamServiceApiFp(this.configuration)
      .deleteSupervisorInTeam(teamId, id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary SupervisorInTeam item
   * @param {string} teamId
   * @param {string} id
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SupervisorInTeamServiceApi
   */
  public readSupervisorInTeam(
    teamId: string,
    id: string,
    domainId?: string,
    options?: any
  ) {
    return SupervisorInTeamServiceApiFp(this.configuration)
      .readSupervisorInTeam(teamId, id, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary List of SupervisorInTeam
   * @param {string} teamId
   * @param {number} [page]
   * @param {number} [size]
   * @param {string} [q]
   * @param {string} [domainId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SupervisorInTeamServiceApi
   */
  public searchSupervisorInTeam(
    teamId: string,
    page?: number,
    size?: number,
    q?: string,
    domainId?: string,
    options?: any
  ) {
    return SupervisorInTeamServiceApiFp(this.configuration)
      .searchSupervisorInTeam(teamId, page, size, q, domainId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update SupervisorInTeam
   * @param {string} teamId
   * @param {string} id
   * @param {EngineUpdateSupervisorInTeamRequest} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SupervisorInTeamServiceApi
   */
  public updateSupervisorInTeam(
    teamId: string,
    id: string,
    body: EngineUpdateSupervisorInTeamRequest,
    options?: any
  ) {
    return SupervisorInTeamServiceApiFp(this.configuration)
      .updateSupervisorInTeam(teamId, id, body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}