import { push } from "connected-react-router";
import { apiUrl } from "../../settings/ApiClient"

export const saveBook = (title, body, publisher, author, images) => {
  return async (dispatch) => {
    const data = {
      title: title,
      body: body,
      publisher: publisher,
      author: author,
    }

    const imageList = images

    const url = '/books';
    return apiUrl.post(url, { books: data, images: imageList})
      .then(() => {
        dispatch(push('/'))
      }).catch((error) => {
        throw new Error(error)
      })
  }
}