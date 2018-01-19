import { createStore, compose, applyMiddleware } from "redux";
import createBrowserHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import logger from "redux-logger";

const history = createBrowserHistory();
const reactRouterMiddleware = routerMiddleware(history);

const configureStore = () => {
  return createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(thunk, reactRouterMiddleware, logger))
  );
}

export default configureStore;
