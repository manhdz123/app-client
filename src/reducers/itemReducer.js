import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, GET_ITEMS_FAILED, GET_ITEMS_SUCCEEDED } from '../actions/types';

const initialState = {
    items: [],
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: [...state.items, action.items]
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
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_ITEMS_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: true
            }

        case GET_ITEMS_SUCCEEDED:
            return {
                ...state,
                items: action.payload,
                loading: false
            }

        default:
            return state;
    }
} 