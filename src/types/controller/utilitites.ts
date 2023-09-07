export type APIResponse<T> = {
    success: true,
    message: string,
    datas: T
}