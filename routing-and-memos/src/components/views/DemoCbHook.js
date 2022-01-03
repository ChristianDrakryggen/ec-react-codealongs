import { useState, useCallback } from "react";
import Todos from "../general/Todos";

const DemoCbHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  console.log("Rendered DemoCbHook");

  const increment = () => {
    setCount(count + 1);
  };

  /*const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };*/

  const addTodo = useCallback(() => setTodos([...todos, "New todo"]), [todos]);

  return (
    <>
      <h1>Demo useCallback()</h1>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <p>{count}</p>
      <button onClick={increment}>Increment count</button>
    </>
  );
};

export default DemoCbHook;
