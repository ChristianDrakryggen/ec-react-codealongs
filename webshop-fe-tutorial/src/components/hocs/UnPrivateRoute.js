import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

const UnPrivateRoute = ({ children }) => {
  //console.log(props);
  const { loggedIn } = useContext(UserContext);
  return !loggedIn ? <>{children}</> : <Navigate to="/account" />;
};

export default UnPrivateRoute;
