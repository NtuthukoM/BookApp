import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'https://localhost:7010/api';
const responseBody = <T>(response: AxiosResponse<T> ) => response.data;


const requests = {
    get: (url: string) => axios.get(url).then(responseBody)

}