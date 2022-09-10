import { createSelector } from "reselect";

const booksSelector = (state) => state.books;

export const getBooks = createSelector(
  [booksSelector],
  state => state.list
);