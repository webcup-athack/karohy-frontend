import axios, { Axios, AxiosRequestConfig, AxiosResponse, AxiosResponseTransformer } from 'axios'
import { Service } from '../types/services/Service'
import { APIResponse } from '../types/controller/utilitites'

export class HttpService extends Service{
    private axios: Axios
    config: AxiosRequestConfig<any>

    constructor(config: AxiosRequestConfig<any>) {
        super()
        // config.transformResponse = [formatResponse]
        this.axios = axios.create(config)
        this.config = config
    }

    get = async <T>(url: string, config?: HttpConfig<any>): Promise<APIResponse<T>> => {
        try {
            const response = await this.axios.get<APIResponse<T>>(url, config)
            // return this.formatResponse(response)
            return response.data
        } catch (error) {
            throw error
        }
    }

    post = async <T>(url: string, data?: any, config?: HttpConfig<any>): Promise<APIResponse<T>> => {
        try {
            const response = await this.axios.post<APIResponse<T>>(url, data, config)
            return response.data
        } catch (error) {
            throw error
        }
    }

    put = async <T>(url: string, data?: any, config?: HttpConfig<any>): Promise<APIResponse<T>> => {
        try {
            const response = await this.axios.put<APIResponse<T>>(url, data, config)
            return response.data
        } catch (error) {
            throw error
        }
    }

    patch = async <T>(url: string, data?: any, config?: HttpConfig<any>): Promise<APIResponse<T>> => {
        try {
            const response = await this.axios.patch<APIResponse<T>>(url, data, config)
            return response.data
        } catch (error) {
            throw error
        }
    }

    delete = async <T>(url: string, config?: HttpConfig<any>): Promise<APIResponse<T>> => {
        try {
            const response = await this.axios.delete<APIResponse<T>>(url, config)
            return response.data
        } catch (error) {
            throw error
        }
    }

    build(config: AxiosRequestConfig) {
        return axios(config)
    }

    getInstance = () => this.axios


}

type HttpConfig<T> = AxiosRequestConfig<T> & {
    cache?: {
        expiration: number
    }
}


const formatResponse : AxiosResponseTransformer = <T>(data: APIResponse<T>) : APIResponse<T> => {
    return data
}