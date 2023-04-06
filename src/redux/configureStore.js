import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import todoReducer from './todo';

const reducer = combineReducers({
  todos: todoReducer,
});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
