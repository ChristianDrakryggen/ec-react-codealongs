import { useState } from "react";
import Todos from "../general/Todos";

const DemoMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);

  console.log("Rendered MemoDemo");

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  return (
    <>
      <h1>Demo Memo</h1>
      <Todos todos={todos} />
      <hr />
      <p>{count}</p>
      <button onClick={increment}>Increment count</button>
      <button onClick={addTodo}>Add todo</button>
    </>
  );
};

export default DemoMemo;
