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
    list: () => requests.get<Book[]>('/books'),
    details: (id: number) => requests.get<Book>(`/books/${id}`),
    create: (book:Book) => requests.post('/books', book),
    delete: (id: number) => requests.del(`/books/${id}`),
    update: (book:Book) => requests.put(`/books/${book.id}`, book),    
}

const agent = {
    Books = boo
}