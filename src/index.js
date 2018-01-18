import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import UserList from "./UserList";
import EditUser from "./EditUser";

import "./style.css";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/users" component={UserList} />
      <Route exact path="/users/:id" component={EditUser} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
