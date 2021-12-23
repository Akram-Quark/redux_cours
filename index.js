const redux = require("redux");
function bake() {
  return {
    type: "BAKE_CAKE",
  };
}
const initState = {
  numberOfCakes: 0,
};
const reducer = (state = initState, action) => {
  if (action.type === "BAKE_CAKE") {
    return {
      ...state,
      numberOfCakes: state.numberOfCakes + 1000,
    };
  } else {
    return state;
  }
};
const setStore = redux.createStore;
let store = setStore(reducer);
console.log("state A :", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log(`ubdated state ${i}`, store.getState()),
);
let i = 0;
while (i < 10) {
  store.dispatch(bake());
  i++;
}
unsubscribe();
