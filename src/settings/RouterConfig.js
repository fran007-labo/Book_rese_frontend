import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import {BooksIndex, BookEditAndNew, Lp, Cart} from "../templates/index";
export default function RouterConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BooksIndex/>} />
        <Route path="/lp" element={<Lp/>} />

        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart/>} exact/>
          <Route path="/book/new" element={<BookEditAndNew/>} exact/>
          <Route path="/book/edit(/:id)?" element={<BookEditAndNew/>} exact/>
        </Route>

      </Routes>
    </>
  )
}
