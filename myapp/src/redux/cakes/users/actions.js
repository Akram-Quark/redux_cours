import axios from "axios";

export function suc(users) {
  return {
    type: "fetch_suc",
    payload: users,
  };
}
export function fail(error) {
  return {
    type: "fetch_fail",
    payload: error,
  };
}
export function req() {
  return {
    type: "fetch_req",
  };
}
export const fetchusers = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        let users = res.data;

        dispatch(suc(users));
      })
      .catch((error) => {
        dispatch(fail(error.message));
      });
  };
};
