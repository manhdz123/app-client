import React, { Component } from 'react';
import { Container, Button, ListGroupItem, ListGroup } from 'reactstrap';
import uuid from 'uuid';
import {CSSTransition , TransitionGroup } from 'react-transition-group';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: uuid(), name: 'John' },
                { id: uuid(), name: 'Bill' },
                { id: uuid(), name: 'Mary' },
                { id: uuid(), name: 'Steve' },
            ]
        }
    }
    render() {
        let { users } = this.state;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter Name');
                        if (name) {
                            this.setState(state => ({
                                users: [...users, { id: uuid(), name }]
                            }))
                        }
                    }}
                >
                    Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {users.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    onClick={() => {
                                        this.setState({
                                            users: users.filter(user => user.id !== id)
                                        })
                                        console.log(users);
                                    }}
                                    size="sm"
                                    color="danger"
                                >
                                    &times;
                                </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList;