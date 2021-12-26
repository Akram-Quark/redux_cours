import React from "react";
import { buyCake } from "../redux/cakes/cackesActions";

import { useSelector, useDispatch } from "react-redux";
function Hookes() {
  const numberOfCackes = useSelector((state) => state.numberOfCackes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of cackes {numberOfCackes}</h2>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        buy cacke
      </button>
    </div>
  );
}

export default Hookes;
