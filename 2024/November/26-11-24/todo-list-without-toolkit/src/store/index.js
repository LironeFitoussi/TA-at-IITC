import { createStore } from 'redux';
import todosReducer from './reducers/TodoReducer';

export const store = createStore(todosReducer)