import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchusers } from "../redux/cakes/users/actions";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>loading ...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>users list</h2>
      <div>
        {userData.users.map((user) => (
          <h3 key={user.id}>{user.name}</h3>
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchusers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
