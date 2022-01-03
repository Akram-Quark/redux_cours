import React from "react";
import { buyIce } from "../redux/cakes/iceact";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function IceCream() {
  let [number, setNumber] = useState(1);
  let iceCreamNuber = useSelector((state) => state.ice.numbOfice);
  let dispatch = useDispatch();
  return (
    <div>
      <h1>number of iceCream :{iceCreamNuber}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button
        onClick={() => {
          dispatch(buyIce(number));
        }}
      >
        buy iceCream
      </button>
    </div>
  );
}

export default IceCream;
