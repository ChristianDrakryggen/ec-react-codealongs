import { useState, useEffect } from "react";

const useFetch = (req) => {
  const [result, setResult] = useState(null);

  const { url, method } = req;

  useEffect(() => {
    async function fetchData() {
      if (method.toLowerCase() === "get") {
        const res = await fetch(url);
        const data = await res.json();
        setResult(data);
      } else {
        alert("I only handle get requests atm!");
      }
    }
    fetchData();
  }, []);

  return result;
};

export default useFetch;
