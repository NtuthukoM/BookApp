import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Card, Image, Label } from "semantic-ui-react";
import agent from "../../api/agent";
import Book from "../../models/book";
import { useStore } from "../../stores/store";


export default observer(function BookList(){
    const {bookStore} = useStore();

    useEffect(() =>{
        bookStore.loadBooks();
        });
    
    return (    
      
      <Card.Group>
        {bookStore.books.map(x => (
            <Card key={x.id}>
            <Card.Content>
                <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
                />
                <Card.Header>{x.title} </Card.Header>
                <Card.Meta>{x.authorName} ({x.year})</Card.Meta>
                <Card.Description>
                {x.genre} <Label></Label>  
                </Card.Description>
            </Card.Content>
            </Card>
        ))}      
    </Card.Group>      
    )
})