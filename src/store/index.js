import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { getAllCources } from "../actions/cources";
import { Reducers } from "../reducers";
import { loadingBarMiddleware } from "react-redux-loading-bar";
// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  Reducers,
  compose(applyMiddleware(thunk, loadingBarMiddleware()))
);

//initial
store.dispatch(getAllCources());
