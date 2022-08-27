import React from "react";
import {  Switch, Route } from "react-router-dom";

import { RegiBookForm, Cart } from './components/Index';
import Home from './Home';

export default function RouterConfig() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/RegiBookForm" component={RegiBookForm} />
        <Route path="/Cart" component={Cart} />
      </Switch>
    </>
  )
}
