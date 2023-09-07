import { AxiosRequestConfig } from "axios"
import { Service } from "../types/services/Service"
import { HttpService } from "./HttpService"
import IOCContainer from "./IoCContainer"
import { AuthService } from "./AuthService"

export default class Container{
    static build = () => {
        const container = new IOCContainer()
        const httpServiceOptions : AxiosRequestConfig<any> = {}

        const baseURL : string = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://localhost:3000/'

        const httpService = new HttpService({baseURL})

        container.set(httpService)
        container.set(new AuthService(httpService))

        

        return container
    }
}