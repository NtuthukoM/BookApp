import React, { useEffect } from "react";
import { List } from "semantic-ui-react";
import agent from "../../api/agent";
import Book from "../../models/book";

export default function BookList(){
    let books: Book[] = [];
    useEffect(() =>{
        agent.Books.list().then((response) => {
            books = response;
            console.
        });
    })
    return (
        <List divided relaxed>
        {books.map(x => (
            <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
            <List.Header>{x.title}</List.Header>
            <List.Description as='a'>{x.genre}, ({x.authorName})</List.Description>
            </List.Content>
            </List.Item>
        ))}

      </List>        
    )
}