import { APIResponse } from "../types/controller/utilitites";
import { Service } from "../types/services/Service";
import { HttpService } from "./HttpService";

export class AuthService extends Service {
    httpService : HttpService

    constructor(_httpService : HttpService){
        super()
        this.httpService = _httpService
    }

    getHttpService = () : HttpService => {
        return this.httpService
    }

    login = (): APIResponse<User> => {
        throw Error('not implemented')
    }

    register = (user : UserRegister): Promise<APIResponse<User>> => {
        const response = this.getHttpService().get<User>("/register")
        return response
    }
}