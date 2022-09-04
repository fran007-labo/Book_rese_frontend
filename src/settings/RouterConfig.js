import React from "react";
import { Switch, Route } from "react-router-dom";
import { Cart, Home, Lp, BookEdit } from '../components/Index';
import { Auth } from "../components/Auth";

export default function RouterConfig() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Lp" component={Lp} />
        
        <Auth> 
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/BookEdit" component={BookEdit} />
          <Route path="/book/edit(/:id)?" component={BookEdit} />
        </Auth>
      </Switch>
    </>
  )
}
