import React, { Component } from 'react';
import { Container, Button, ListGroupItem, ListGroup } from 'reactstrap';
import {CSSTransition , TransitionGroup } from 'react-transition-group';
import {connect}  from 'react-redux';
import {deleteItem, getItems} from '../actions/types'

class ShoppingList extends Component {

    componentDidMount(){
       this.props.getItems();
    }

    render() {
        let {items} = this.props;
        console.log(items);
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    onClick={() => {
                                        this.props.deleteItem(id)
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
const mapStateToProps = (state) => {
    return{
        items: state.itemReducers.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => {
            dispatch(getItems());
        },

        deleteItem: (id) => {
            dispatch(deleteItem(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);