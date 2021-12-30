const initialState = {
  loading: false,
  users: [],
  error: "",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch_req":
      return {
        users: [],
        loading: true,
        error: "",
      };
    case "fetch_suc":
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case "fetch_suc":
      return {
        users: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
