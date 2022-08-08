import { useContext, createContext } from "react";
import {  } from "vm";
import BookStore from "./booksStore";


interface Store {
    bookStore : BookStore;
}

export const store: Store = {
    bookStore: new BookStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}