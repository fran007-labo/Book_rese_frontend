import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import {BooksIndex, BookEditAndNew, Lp, Cart, Dashboard, UserDetail} from "../templates/index";
import { DarkModeContext } from "../context/darkModeContext";
export default function RouterConfig() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/" element={<BooksIndex/>} />
        <Route path="/lp" element={<Lp/>} />
        <Route path="/dashboard" element={<Dashboard/>} exact/>
        <Route path="/dashboard(/:id)?" element={<Dashboard/>} exact/>
        {/* <Route path="/dashboard/user(/:id)?" element={<Dashboard/>} /> */}
        <Route path="/dashboard/user" element={<UserDetail/>} exact/>

        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart/>} exact/>
          <Route path="/book/new" element={<BookEditAndNew/>} exact/>
          <Route path="/book/edit(/:id)?" element={<BookEditAndNew/>} exact/>
        </Route>

      </Routes>
    </div>
  )
}
