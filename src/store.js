import {createStore} from 'redux';
import rootReducer from './reducers';
import parentMiddleware from './middlewares';

export default createStore(rootReducer, parentMiddleware);