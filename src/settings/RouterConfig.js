import { Routes, Route } from "react-router-dom";
import { Auth } from "./Auth";

import {BooksIndex, BookEditAndNew, Lp, Cart} from "../templates/index";
export default function RouterConfig() {
  return (
    <>
      <Routes>
        <Route path="/books" element={<BooksIndex/>} />
        <Route path="/lp" element={<Lp/>} />

        {/* <Auth> */}
          <Route path="cart" element={<Cart/>} />
          <Route path="book/new" element={<BookEditAndNew/>} />
          <Route path="book/edit(/:id)?" element={<BookEditAndNew/>} />
        {/* </Auth> */}
      </Routes>
    </>
  )
}
