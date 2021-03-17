import { combineReducers } from "redux";
import { Courcereducer } from "./cource";
import { CourcersReducer } from "./cources";
import { UserReducer } from "./user";
import { loadingBarReducer } from "react-redux-loading-bar";
export const Reducers = combineReducers({
  cources: CourcersReducer,
  cource: Courcereducer,
  user: UserReducer,
  loadingBar: loadingBarReducer,
});
