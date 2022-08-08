import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import Book from "../models/book";


export default class BookStore {
    books: Book[] = [];

    constructor(){
        makeAutoObservable(this);
    }

    loadBooks = async () => {
        try{
           this.books = await agent.Books.list();
        }catch(error){

        }
    } 

}