import todos from './todo'
import { combineReducers }  from 'redux';

const todoApp = combineReducers({todos});
export default todoApp;