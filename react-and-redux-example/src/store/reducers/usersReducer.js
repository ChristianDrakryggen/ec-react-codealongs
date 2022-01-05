const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "addUser":
      return [...state, action.payload];
    case "removeUser":
      state.pop()
      return [...state]
    default:
      return state;
  }
};

export default usersReducer;
