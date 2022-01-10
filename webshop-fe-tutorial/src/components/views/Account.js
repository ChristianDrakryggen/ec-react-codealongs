import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Account = () => {
  const {user} = useContext(UserContext)
  return (
    <>
      <h1>Account</h1>
      <p>Welcome {user.firstname}!</p>
    </>
  );
};

export default Account;
