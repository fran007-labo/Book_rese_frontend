import React from "react";
import {Route, Switch} from "react-router";

import { RegiBookForm, Cart } from './components/Index';
import Home from './Home';

export default function RouterConfig() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/RegiBookForm" component={RegiBookForm} />
        <Route exact path="/Cart" component={Cart} />
      </Switch>
    </>
  )
}
