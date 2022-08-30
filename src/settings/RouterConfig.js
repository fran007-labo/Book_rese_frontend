import React from "react";
import { Switch, Route } from "react-router-dom";
import { Cart, Home, RegiBookForm, RegiBookForm2, Lp } from '../components/Index';
import { Auth } from "../components/Auth";

export default function RouterConfig() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Lp" component={Lp} />
        
        <Auth> 
          <Route exact path="/RegiBookForm" component={RegiBookForm} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/RegiBookForm2" component={RegiBookForm2} />
        </Auth>
      </Switch>
    </>
  )
}
