import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(user));
    setUser({ username: "", password: "" });
  };

  const handleInput = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  console.log(user);

  return (
    <div>
      <h2>Login form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleInput}
        />
        <input
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInput}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
