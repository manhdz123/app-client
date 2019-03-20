import { ADD_ITEM, GET_ITEMS, DELETE_ITEM, GET_ITEMS_FAILED , GET_ITEMS_SUCCEEDED,
    ADD_ITEM_FAILED, ADD_ITEM_SUCCEEDED, DELETE_ITEM_FAILED, DELETE_ITEM_SUCCEEDED} from '../actions/types';
import { itemServices } from '../services';

const itemMiddleware = store => next => action => {
    switch (action.type) {
        case GET_ITEMS:
            return itemServices.getItems().then(res => {
                return next({
                    type: GET_ITEMS_SUCCEEDED,
                    payload: action.items,
                    action: action
                })
            })
                .catch(error => {
                    return next({
                        type: GET_ITEMS_FAILED,
                        payload: error.response,
                        action: action
                    });
                });

        case ADD_ITEM:
            return itemServices.addItem(action.item).then(res => {
                return next({
                    type: ADD_ITEM_SUCCEEDED,
                    payload: action.item,
                    action: action
                })
            })
                .catch(error => {
                    return next({
                        type: ADD_ITEM_FAILED,
                        payload: error.response,
                        action: action
                    })
                })

        case DELETE_ITEM:
            return itemServices.deleteItem(action.id).then(res => {
                return next({
                    type: DELETE_ITEM_SUCCEEDED,
                    payload: action.id,
                    action: action
                })
            })
                .catch(error => {
                    return next({
                        type: DELETE_ITEM_FAILED,
                        payload: error.response,
                        action: action
                    })
                })

        default:
            next(action);
    }
}

export default itemMiddleware;