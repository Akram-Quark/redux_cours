import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import cackeReducer from "./cakeReducer";
import { composeWithDevTools } from "redux-devtools-extension";

import iceCreamReducer from "./icred";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  cake: cackeReducer,
  ice: iceCreamReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger)),
);
export default store;
