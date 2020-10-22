import { createStore } from 'redux';
import { Reducers } from './combineReducer.js';

//=> recebendo como paramentro as reducers, no caso tem que ser o combineReducers
const store = createStore(Reducers); 

export { store };