import { makeAutoObservable } from "mobx";


export default class BookStore {
    boo

    constructor(){
        makeAutoObservable(this);
    }
}