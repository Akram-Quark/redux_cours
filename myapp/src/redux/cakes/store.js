import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cackeReducer from "./cakeReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./users/reducers";

import iceCreamReducer from "./icred";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  cake: cackeReducer,
  ice: iceCreamReducer,
  users: userReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);
export default store;
