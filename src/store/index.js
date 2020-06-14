import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { profile } from './actions';

const store = applyMiddleware(thunk)(createStore)(profile);

export default store;