import React from "react";
import { buyCake } from "../redux/cakes/cackesActions";
import { connect } from "react-redux";

function CackeContainer({ numberOfCackes, buyCack }) {
  return (
    <div>
      <h2>number of cackes {numberOfCackes}</h2>
      <button onClick={buyCack}>buy cacke</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numberOfCackes: state.numberOfCackes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCack: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CackeContainer);
