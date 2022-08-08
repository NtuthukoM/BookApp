import { makeAutoObservable } from "mobx";


export default class BookStore {


    constructor(){
        makeAutoObservable(this);
    }
}