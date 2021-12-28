import { useState, useEffect } from "react";

const CountStuff = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    console.log("I'm mounted");
  }, [count]);

  return (
    <>
      <h2>I count stuff</h2>
      <p>{count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  );
};

export default CountStuff;
