import React, { useEffect } from "react";
import { List } from "semantic-ui-react";
import agent from "../../api/agent";
import Book from "../../models/book";

export default function BookList(){
    let books: Book[];
    useEffect(() =>{
        agent.Books.list().then((response) => {
            books = response;
        });
    })
    return (
        <List divided relaxed>
        {books.map(x => {


        })}

      </List>        
    )
}