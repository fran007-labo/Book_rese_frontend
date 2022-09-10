import { push } from "connected-react-router";
import instance from "../../lib/ApiClient"

export const saveBook = (title, body, publisher, author, sizes, images) => {
  return async (dispatch) => {
    const data = {
      title: title,
      body: body,
      publisher: publisher,
      author: author,
      sizes: sizes
    }

    const imageList = images

    // if (id === "") {
    //   const ref = productsRef.doc()
    //   data.created_at = timestamp;
    //   id = ref.id;
    //   data.id = id;
    // }

    const url = '/books';
    return instance.post(url, { books: data, images: imageList})
      .then(() => {
        dispatch(push('/'))
      }).catch((error) => {
        throw new Error(error)
      })
  }
}