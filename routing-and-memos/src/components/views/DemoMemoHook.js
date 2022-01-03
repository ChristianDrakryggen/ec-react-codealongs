import { useState, useMemo } from "react";

const DemoMemoHook = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  //const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const addPost = () => {
    setPosts([...posts, "New Post"]);
  };

  return (
    <>
      <h2>Demo useMemo()</h2>
      <div>
        {posts.map((post, index) => {
          return <p key={index}>{post}</p>;
        })}
        <button onClick={addPost}>Add Post</button>
      </div>
      <hr />
      <div>
        <p>{count}</p>
        <button onClick={increment}>Increment count</button>
      </div>
      <hr />
      <div>
        <h3>Expensive calculation result</h3>
        <p>{calculation}</p>
      </div>
    </>
  );
};

const expensiveCalculation = (num) => {
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default DemoMemoHook;
