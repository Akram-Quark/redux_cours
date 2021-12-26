const redux = require("redux");
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const applyeMidleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
function bake() {
  return {
    type: "BAKE_CAKE",
  };
}
function sel() {
  return {
    type: "sold_cakes",
  };
}
const initState = {
  numberOfCakesbaked: 0,
};
const saoldinit = {
  numberOfCakesold: 0,
};
const reducer = (state = initState, action) => {
  if (action.type === "BAKE_CAKE") {
    return {
      ...state,
      numberOfCakesbaked: state.numberOfCakesbaked + 1000,
    };
  } else {
    return state;
  }
};
const soldreducer = (state = saoldinit, action) => {
  if (action.type === "sold_cakes") {
    return {
      ...state,
      numberOfCakesold: state.numberOfCakesold + 2,
    };
  } else {
    return state;
  }
};
let rootReducer = combineReducers({
  reducer,
  soldreducer,
});
const setStore = redux.createStore;
let store = setStore(rootReducer, applyeMidleware(logger));
store.getState();
let unsub = store.subscribe(() => {});
store.dispatch(bake());
store.dispatch(sel());
unsub();
