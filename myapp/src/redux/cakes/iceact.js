export const buyIce = (number = 1) => {
  return {
    type: "buy_icecream",
    payload: number,
  };
};
