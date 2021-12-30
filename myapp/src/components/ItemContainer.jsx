import React from "react";
import { connect } from "react-redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>item :{props.item} </h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  let itemStat = ownProps.cake
    ? state.cake.numberOfCackes
    : state.ice.numbOfice;
  return {
    item: itemStat,
  };
};

export default connect(mapStateToProps)(ItemContainer);
