import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { List } from "semantic-ui-react";
import agent from "../../api/agent";
import Book from "../../models/book";
import { useStore } from "../../stores/store";

const {bookStore} = useStore();
export default observer(function BookList(){

    useEffect(() =>{
        bookStore.loadBooks();
        });
    })
    return (
        <List divided relaxed>
        {bookStore.books.map(x => (
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
})