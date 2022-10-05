import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PageFrame } from "./PageFrame";
import {BooksIndex, BookEditAndNew, Lp, Cart, Dashboard, UserDetail} from "../templates/index";
import { DarkModeContext } from "../context/darkModeContext";
export default function RouterConfig() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/lp" element={<Lp/>} />

        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/" element={<PageFrame />}>
          <Route path="/" element={<BooksIndex/>} />
          <Route path="/dashboards" element={<Dashboard/>} exact/>
          <Route path="/dashboards/users/:id" element={<UserDetail/>} />
          <Route path="/cart" element={<Cart/>} exact/>
          <Route path="/book/new" element={<BookEditAndNew/>} exact/>
          <Route path="/book/edit/:id" element={<BookEditAndNew/>}/>
        </Route>
        {/* </Route> */}

      </Routes>
    </div>
  )
}
