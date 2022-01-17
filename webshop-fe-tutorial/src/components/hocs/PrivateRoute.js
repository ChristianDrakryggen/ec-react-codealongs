import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  //console.log(props);
  const { loggedIn } = useContext(UserContext);
  return loggedIn ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
