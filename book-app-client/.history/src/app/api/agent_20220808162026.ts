import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'https://localhost:7010/api';
const responseBody = <T>(response: AxiosResponse<T> ) => response.data;


const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    put: <T>(url: string, model: T) => axios.get<T>(url, model).then(responseBody),
    post: <T>(url: string, model: T) => axios.post<T>(url, model).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}