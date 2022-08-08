import axios, { AxiosResponse } from "axios";
import Book from "../models/book";

axios.defaults.baseURL = 'https://localhost:7010/api';
const responseBody = <T>(response: AxiosResponse<T> ) => response.data;


const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    put: <T>(url: string, model: {}) => axios.get<T>(url, model).then(responseBody),
    post: <T>(url: string, model: {}) => axios.post<T>(url, model).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Books = {
    list: () => requests.get<Book[]>('/activities'),
    details: (id: number) => requests.get<Book>(`/activities/${id}`),
    create: (activity:Book) => requests.post('/activities', activity),
    delete: (id: number) => requests.del(`/activities/${id}`),
    update: (book:Book) => requests.put(`/activities/${book.id}`, book),    
}