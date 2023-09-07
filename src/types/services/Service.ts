export class Service{
    id: string

    constructor(){
        this.id = this.constructor.name
    }
}