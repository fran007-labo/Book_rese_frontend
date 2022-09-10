import * as Actions from './actions';
import { initialState } from '../store/initialState';

export const BooksReducer = (state = initialState.books, action) => {
  switch (action.type) {
    case Actions.FETCH_BOOKS:
      return {
        ...state,
        list: [...action.payload]
      };
    default:
      return state
  }
};