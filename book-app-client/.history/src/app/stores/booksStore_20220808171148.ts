import { makeAutoObservable } from "mobx";
import Book from "../models/book";


export default class BookStore {
    books: Book[] = [];

    constructor(){
        makeAutoObservable(this);
    }

    loadBooks =async () => {
        try{
            await 
        }catch(error){

        }
    } 

}