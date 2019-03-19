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
import {getItems} from '../actions/types';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle() {
        this.setState({ modal: !this.state.modal })
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = event => {
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
                onClick={this.toggle.bind(this)}
            >
                Add Item
            </Button>
            <Modal>
                <ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add Shopping Item"
                                    onChange={(event) => this.onChange(event)} />
                            </FormGroup>
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