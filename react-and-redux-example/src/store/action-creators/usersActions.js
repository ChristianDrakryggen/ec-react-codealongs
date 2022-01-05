export const addUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: "addUser",
      payload: user,
    });
  };
};

export const removeUser = () => {
  return (dispatch) => {
    dispatch({
      type: "removeUser",
    });
  };
};
