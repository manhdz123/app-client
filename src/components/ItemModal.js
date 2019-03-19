import React, { Component } from 'react';
import {
    Button,
    Modal,
    Form,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Input,
    Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, addItem } from '../actions/types';
import uuid from 'uuid';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            id: uuid(),
            name: this.state.name
        }

        this.props.addItem(newItem);
        this.toggle();
    }


    render() {
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >
                    Add Item
            </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="item">Item</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="item"
                                        placeholder="Add Shopping Item"
                                        onChange={(event) => this.onChange(event)} 
                                        onKeyUp={(event) => event.key === 'Enter' ? this.onSubmit(event) : event.preventDefault()}
                                        />
                                </FormGroup>
                                <Button
                                    color="dark"
                                    style={{ marginBottom: '2rem' }}
                                    onClick={(event) => this.onSubmit(event)}
                                >
                                    Add Item
                                 </Button>
                            </Form>
                        </ModalBody>
                    </ModalHeader>
                </Modal>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.item
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => {
            dispatch(getItems);
        },

        addItem: (item) => {
            dispatch(addItem(item))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);