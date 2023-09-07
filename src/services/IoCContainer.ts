import { Service } from "../types/services/Service";

export default class IOCContainer {
    private keys = []
    // private dependencies = new Map<typeof this.keys, Service>();
    private dependencies = new Map<string, Service>();

    set<T extends Service>(dependency: T): this {
        if(this.hasDependency(dependency.id)){
            throw new Error(`IocContainerError : Duplicate key entry in container for service type: ${dependency.constructor.name}, please delete the duplicate service instanciation`)
        }
        // this.keys.push(dependency.id)
        this.dependencies.set(dependency.id, dependency);
        return this;
    }

    get<T extends Service>(id: string): T {
        if (!this.hasDependency(id))
            throw `"${id}" dependency not found`;
        return this.dependencies.get(id) as T;
    }

    hasDependency(id: string) : boolean {
        return this.dependencies.has(id)
    }
}