export const GET_ITEMS = 'GET_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const ITEMS_LOADING = 'ITEM_LOADING';
export const GET_ITEMS_SUCCEEDED = 'GET_ITEMS_SUCCEEDED';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';
export const DELETE_ITEM_SUCCEEDED = 'DELETE_ITEM_SUCCEEDED';
export const DELETE_ITEM_FAILED = 'DELETE_ITEM_FAILED';
export const ADD_ITEM_SUCCEEDED = 'ADD_ITEM_SUCCEEDED';
export const ADD_ITEM_FAILED = 'ADD_ITEM_FAILED';


export function getItems(){
    return {
        type: GET_ITEMS,
    }
}

export function deleteItem(id){
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export function itemsLoading(){
    return {
        type: ITEMS_LOADING,
    }
}
