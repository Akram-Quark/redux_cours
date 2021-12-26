const redux = require("redux");
const reduxLogger = require("redux-logger");
const applyeMidleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const setStore = redux.createStore;
const thunk = require("redux-thunk").default;
const axios = require("axios");

const initialStat = {
  loading: false,
  users: [],
  error: "",
};
const fetch_users_req = "fetch_users_req";
const fetch_users_success = "fetch_users_success";
const fetch_users_failed = "fetch_users_failed";
//d action creators//
let fetchsuccess = (users) => {
  return {
    type: fetch_users_success,
    payload: users,
  };
};
let fetchreq = () => {
  return {
    type: fetch_users_req,
  };
};
let fetchfailed = (error) => {
  return {
    type: fetch_users_failed,
    payload: error,
  };
};
let reducer = (state = initialStat, actions) => {
  switch (actions.type) {
    case fetch_users_req:
      return {
        ...state,
        loading: true,
      };
    case fetch_users_success:
      return {
        loading: false,
        users: actions.payload,
        error: "",
      };

    case fetch_users_failed:
      return {
        loading: false,
        users: [],
        error: actions.payload,
      };
      break;
  }
};
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchreq());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        let users = res.data.map((u) => u.id);
        dispatch(fetchsuccess(users));
      })
      .catch((err) => {
        dispatch(fetchfailed(err.message));
      });
  };
};
let store = setStore(reducer, applyeMidleware(logger, thunk));
store.subscribe(() => {
  store.getState();
});
store.dispatch(fetchUsers());
