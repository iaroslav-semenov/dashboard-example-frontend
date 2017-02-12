import { createStore, combineReducers } from 'redux';
import Authorization from './Reducers/Authorization';

const reducers = combineReducers({
    Authorization
});

const Store = createStore(reducers);

console.log('Initial state: ', Store.getState());

export default Store;