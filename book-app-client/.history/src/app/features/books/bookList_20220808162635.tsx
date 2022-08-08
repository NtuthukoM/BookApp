import React, { useEffect } from "react";
import agent from "../../api/agent";
import Book from "../../models/book";

export default function BookList(){
    const books: Book[];
    useEffect(() =>{
        books = agent.Books.lis
    })
    return (

    )
}