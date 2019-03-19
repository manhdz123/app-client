import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {

}

const middlewares = [thunk];

export default createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
))