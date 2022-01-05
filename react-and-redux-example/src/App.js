import { useSelector, useDispatch } from "react-redux";
import {
  usersActionCreators,
  accountActionCreators,
} from "./store/exportActions";
import { bindActionCreators } from "redux";

function App() {
  const {users, account} = useSelector((state) => state);
  const dispatch = useDispatch();

  const { addUser, removeUser } = bindActionCreators(
    usersActionCreators,
    dispatch
  );

  const { deposit, withdraw } = bindActionCreators(
    accountActionCreators,
    dispatch
  );

  //console.log(state);

  return (
    <div>
      <h1>React and redux</h1>
      <p>Number of users: {users.length}</p>
      <button onClick={() => addUser({ fname: "Christian" })}>Add user</button>
      <button onClick={() => removeUser()}>Remove user</button>
      {users.map((user, index) => (
        <p key={index}>{user.fname}</p>
      ))}
      <hr />
      <p>Account balance: {account} kr</p>
      <button onClick={() => deposit(500)}>Deposit</button>
      <button onClick={() => withdraw(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
