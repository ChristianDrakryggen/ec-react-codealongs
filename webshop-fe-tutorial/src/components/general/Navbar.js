import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { BasketContext } from "../../context/BasketContext";

const Navbar = () => {
  const { loggedIn, setLoggedIn, setUser } = useContext(UserContext);
  const { basketVisible, setBasketVisible } = useContext(BasketContext);

  const navigate = useNavigate();

  const navStyle = {
    padding: "20px 10px",
    borderBottom: "2px solid black",
    display: "flex",
    justifyContent: "space-between",
  };

  const linkStyle = {
    marginRight: "10px",
  };

  const buttonStyle = {
    marginLeft: "10px",
  };

  const handleBasketVisibility = () => {
    return basketVisible ? (
      <button style={buttonStyle} onClick={() => setBasketVisible(false)}>
        Hide basket
      </button>
    ) : (
      <button style={buttonStyle} onClick={() => setBasketVisible(true)}>
        Show basket
      </button>
    );
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    setUser({ username: "" });
    navigate("/login");
  };

  const authNav = () => {
    return (
      <nav style={navStyle}>
        <div>
          <Link style={linkStyle} to="/">
            Shop
          </Link>
          <Link style={linkStyle} to="/account">
            Account
          </Link>
          <Link style={linkStyle} to="/checkout">
            Checkout
          </Link>
        </div>
        <div>
          {handleBasketVisibility()}
          <button onClick={handleLogOut} style={buttonStyle}>
            Logout
          </button>
        </div>
      </nav>
    );
  };

  const unAuthNav = () => {
    return (
      <nav style={navStyle}>
        <div>
          <Link style={linkStyle} to="/">
            Shop
          </Link>
          <Link style={linkStyle} to="/checkout">
            Checkout
          </Link>
          <Link style={linkStyle} to="/login">
            Login
          </Link>
          <Link style={linkStyle} to="/register">
            Register
          </Link>
        </div>
        <div>{handleBasketVisibility()}</div>
      </nav>
    );
  };

  return <>{loggedIn ? authNav() : unAuthNav()}</>;
};

export default Navbar;
