import { getCookie } from "helpers/utils";

import Home from "pages/Home/Home";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Routes(props) {
  const token = getCookie("ACCESS_TOKEN");

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
