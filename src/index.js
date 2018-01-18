import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import UserList from "./UserList";

import "./style.css";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/users" component={UserList} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
