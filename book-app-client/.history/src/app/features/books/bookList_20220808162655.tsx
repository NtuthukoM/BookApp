import React, { useEffect } from "react";
import agent from "../../api/agent";
import Book from "../../models/book";

export default function BookList(){
    let books: Book[];
    useEffect(() =>{
        books = agent.Books.list();
    })
    return (

    )
}