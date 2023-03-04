export const depositAmount = (amount) => {
  return (dispatch) => {
    dispatch({ type: "deposit", payload: amount });
  };
};

export const withDrawAmount = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};
