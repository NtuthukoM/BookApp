import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { List } from "semantic-ui-react";
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
        {bookStore.books.map(x => (
            <List.Item key={x.id}>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
            <List.Header>{x.title}</List.Header>
            <List.Description as='a'>{x.genre}, ({x.authorName})</List.Description>
            </List.Content>
            </List.Item>
        ))}

      </List>       
      
      <Card.Group>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
          />
          <Card.Header>Steve Sanders</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
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
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
          />
          <Card.Header>Molly Thomas</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Molly wants to add you to the group <strong>musicians</strong>
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