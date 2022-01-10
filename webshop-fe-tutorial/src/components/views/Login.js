import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { firstname, lastname } = useParams();
  const { setUser, setLoggedIn } = useContext(UserContext);

  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    firstname && lastname
      ? setUser({ ...loginUser, firstname, lastname })
      : setUser({ ...loginUser, firstname: "Bengt", lastname: "Bengtsson" });
    navigate("/account");
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLoginUser}>
        <input name="username" placeholder="Username" onChange={handleInput} />
        <input name="password" placeholder="Password" onChange={handleInput} />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
