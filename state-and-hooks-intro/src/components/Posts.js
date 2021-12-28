//import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const Posts = () => {
  /*const [posts, setPosts] = useState([]);

  console.log(posts);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);*/

  const posts = useFetch("https://jsonplaceholder.typicode.com/posts/");

  return (
    <>
      <h2>I fetch posts</h2>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </>
  );
};

export default Posts;
