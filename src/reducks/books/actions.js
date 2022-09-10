export const FETCH_BOOKS = "FETCH_BOOKS";
export const fetchBooksAction = (books) => {
  return {
    type: "FETCH_BOOKS",
    payload: books
  }
}