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
                src='https://cdn-icons-png.flaticon.com/512/1903/1903162.png'
                />
                <Card.Header>{x.title} </Card.Header>
                <Card.Meta>{x.authorName} ({x.year})</Card.Meta>
                <Card.Description>
                <Label>R{x.price}</Label> {x.genre} 
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            <Details></Details>
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>            
            </Card>
        ))}      
    </Card.Group>      
    )
})