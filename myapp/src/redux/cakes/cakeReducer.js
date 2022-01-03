const initialState = {
  numberOfCackes: 100,
};

const cackeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Buy_Cake":
      return {
        ...state,
        numberOfCackes: state.numberOfCackes - 1,
      };
    default:
      return state;
  }
};

export default cackeReducer;
