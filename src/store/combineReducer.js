import { combineReducers } from 'redux';
import { reducers } from './reducer';

//=> combinação de vários reducers caso eles existam.
const Reducers = combineReducers({
//=> index : nome do reducer (por convenção o nome é o nome do reducer mais o "Reducer" ao final.)
    mensagem: reducers
})

export {Reducers}