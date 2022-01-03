import { memo } from "react";

const Todos = (props) => {
  const { todos, addTodo } = props;

  console.log("Rendered Todos");

  return (
    <>
      <h3>My Todos</h3>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add todo</button>
    </>
  );
};

export default memo(Todos);
