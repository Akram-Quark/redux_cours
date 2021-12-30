const iceState = {
  numbOfice: 200,
};

const iceCreamReducer = (state = iceState, action) => {
  switch (action.type) {
    case "buy_icecream":
      return {
        ...state,
        numbOfice: state.numbOfice - action.payload,
      };
    default:
      return state;
  }
};
export default iceCreamReducer;
