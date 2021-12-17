import "./App.css";
import { Greeting, AnotherGreeting } from "./components/Greeting";
import DefaultGreeting, { Hello } from "./components/DeafultGreeting";
import { users, cars } from "./services/getUsers";

function App() {
  console.log(users);
  console.log(cars);

  const [user1, user2] = users;

  console.log(user1);

  const { name, age } = user1;

  return (
    <div className="App">
      <h1>{name + " " + age}</h1>
      {users.map(user => <p>{user.name}</p>)}
      <Greeting />
      <AnotherGreeting />
      <DefaultGreeting />
      <Hello />
    </div>
  );
}

export default App;
