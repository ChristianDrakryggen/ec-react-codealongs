import ChildOne from "./components/ChildOne";
import { useState, useContext } from "react";
import { BasketContext } from "./context/basketContext";
import { UserContext } from "./context/userContext";

function App() {
  //const basketContext = useContext(BasketContext);
  const { basket, setBasket } = useContext(BasketContext);

  const userContext = useContext(UserContext);
  console.log(userContext);

  //console.log(basketContext);
  console.log(basket);

  const [message, setMessage] = useState("Hello world");

  const logInUser = () => {
    userContext.setUser({ username: "christianDrakryggen" });
    userContext.setLoggedIn(true);
  };

  return (
    <>
      <ChildOne message={message} />
      <hr />
      <h1>Context time</h1>
      <h2>Basket context</h2>
      <button onClick={() => setBasket([...basket, { title: "Coke" }])}>
        Add Item
      </button>
      {basket.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
      <hr />
      <h2>User Context</h2>
      <button onClick={logInUser}>Log in user</button>
      {userContext.loggedIn && <p>Welcome {userContext.user.username}</p>}
    </>
  );
}

export default App;
