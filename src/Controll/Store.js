import { createStore } from 'redux';
import AuthorizationReducer from './Reducers/Authorization';

const Store = createStore(AuthorizationReducer);

console.log('Initial state: ', Store.getState());

export default Store;