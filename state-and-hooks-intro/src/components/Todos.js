import useFetch from "../hooks/useFetch";

const Todos = () => {
  const todos = useFetch("https://jsonplaceholder.typicode.com/todos/");

  return (
    <>
      <h2>Here are some todos</h2>
      {todos.map((todo) => (
        <p>{todo.title}</p>
      ))}
    </>
  );
};

export default Todos;
