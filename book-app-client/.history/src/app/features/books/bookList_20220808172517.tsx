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
        <List divided relaxed>


      </List>       
      
      <Card.Group>
      
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
          />
          <Card.Header>Jenny Lawrence</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Jenny requested permission to view your contact details
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
            </Button>
            <Button basic color='red'>
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>      
    )
})