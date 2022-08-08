import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'https://localhost:7010/api';
const responseBody = <T>(response: AxiosResponse<T> ) => response.data;


const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    

}