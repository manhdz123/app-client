import itemMiddleware from './itemMiddleware';
import {applyMiddleware} from 'redux';

export default applyMiddleware(
    itemMiddleware
)