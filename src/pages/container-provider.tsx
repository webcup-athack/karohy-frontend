import { createContext, PropsWithChildren, useContext } from 'react'
import IOCContainer from '../services/IoCContainer'
import { Service } from '../types/services/Service'

const ContainerContext = createContext<IOCContainer>({} as any)

export function ContainerProvider(props: ContainerProviderProps) {
    return <ContainerContext.Provider value={props.container}>{props.children}</ContainerContext.Provider>
}

type ContainerProviderProps = PropsWithChildren<{
    container: IOCContainer
}>

export function useService<T extends typeof Service>(type: T) {
    const ioc = useContext(ContainerContext)
    return ioc.get<T>(type)
}