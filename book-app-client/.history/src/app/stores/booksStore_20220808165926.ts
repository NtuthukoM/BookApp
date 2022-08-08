import { makeAutoObservable } from "mobx";
import Book from "../models/book";


export default class BookStore {
    books: Book[] = [];

    constructor(){
        makeAutoObservable(this);
    }

    
}