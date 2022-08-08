import { makeAutoObservable } from "mobx";


export default class BookStore {
    books: Book[] = [];

    constructor(){
        makeAutoObservable(this);
    }
}