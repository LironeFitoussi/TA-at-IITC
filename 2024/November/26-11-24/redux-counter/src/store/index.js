import { createStore } from 'redux';
import counterReducer from './reducers/CounterReducer';

export const store = createStore(counterReducer);