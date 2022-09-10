import React from "react";
import { Switch, Route } from "react-router-dom";
import { Auth } from "./Auth";

import {BooksIndex, BookEdit, Lp, Cart, Home} from "../templates/index";
export default function RouterConfig() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books/index" component={BooksIndex} />
        <Route exact path="/Lp" component={Lp} />
        
        <Auth> 
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/book/edit" component={BookEdit} />
          <Route path="/book/edit(/:id)?" component={BookEdit} />
        </Auth>
      </Switch>
    </>
  )
}
