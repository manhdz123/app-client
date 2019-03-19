import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';
import uuid from 'uuid';

const initialState = {
    items: [
        { id: uuid(), name: 'John' },
        { id: uuid(), name: 'Bill' },
        { id: uuid(), name: 'Mary' },
        { id: uuid(), name: 'Steve'},
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
            }

        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.item]
            }
        default:
            return state;
    }
} 