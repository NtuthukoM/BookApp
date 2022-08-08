import { makeAutoObservable } from "mobx";


export default class BookStore {
    books

    constructor(){
        makeAutoObservable(this);
    }
}