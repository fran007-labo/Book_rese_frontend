import React from "react";
import {  Switch, Route } from "react-router-dom";
import { RegiBookForm, Cart } from '../components/Index';
import Home from '../Home';
import { Auth } from "../components/Auth";

export default function RouterConfig() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Auth> 
          <Route path="/RegiBookForm" component={RegiBookForm} />
          <Route path="/Cart" component={Cart} />
        </Auth>
      </Switch>
    </>
  )
}
