import {
  legacy_createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import {connectRouter, routerMiddleware} from 'connected-react-router';

import { BooksReducer } from '../books/reducers';
import { UsersReducer } from '../users/reducers';
import thunk from 'redux-thunk';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      books: BooksReducer,
      router: connectRouter(history),
      users: UsersReducer
    }), 
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}