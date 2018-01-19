import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import UserList from "./UserList";
import EditUser from "./EditUser";

import "./style.css";

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/users" component={UserList} />
        <Route exact path="/users/:id" component={EditUser} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
