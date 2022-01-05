import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import accountReducer from "./accountReducer";

const reducers = combineReducers({
  users: usersReducer,
  account: accountReducer
});

export default reducers;
