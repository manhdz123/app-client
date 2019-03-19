import {GET_ITEMS} from '../actions/types';
import uuid from 'uuid';

const initialState = {
    users: [
        { id: uuid(), name: 'John' },
        { id: uuid(), name: 'Bill' },
        { id: uuid(), name: 'Mary' },
        { id: uuid(), name: 'Steve' },
    ]
};

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                user: users.map(key, )
            }
    }
} 