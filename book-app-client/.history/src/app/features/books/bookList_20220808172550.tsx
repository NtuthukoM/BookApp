import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Card, List } from "semantic-ui-react";
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

        ))}      
    </Card.Group>      
    )
})