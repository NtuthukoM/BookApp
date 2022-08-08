import BookStore from "./booksStore";


interface Store {
    bookStore : BookStore;
}

export const store: Store {
    bookStore
}