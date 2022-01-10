import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const [registerUser, setRegisterUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    setRegisterUser({ ...registerUser, [e.target.name]: e.target.value });
  };

  const handleRegisterUser = (e) => {
    e.preventDefault();
    alert(JSON.stringify(registerUser));
    navigate(`/login/${registerUser.firstname}/${registerUser.lastname}`);
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleRegisterUser}>
        <input
          name="firstname"
          placeholder="Firstname"
          onChange={handleInput}
        />
        <input name="lastname" placeholder="Lastname" onChange={handleInput} />
        <input name="username" placeholder="Username" onChange={handleInput} />
        <input name="password" placeholder="Password" onChange={handleInput} />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
