import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = () => {
    return {
      marginRight: "10px",
      textDecoration: "none",
    };
  };

  return (
    <nav
      style={{
        padding: "20px 0px",
        marginBottom: "20px",
        borderBottom: "2px solid black",
      }}
    >
      <Link style={linkStyle()} to="/">
        Home
      </Link>
      <Link style={linkStyle()} to="/about">
        About
      </Link>
      <Link style={linkStyle()} to="/demomemo">
        Demo memo
      </Link>
      <Link style={linkStyle()} to="/demomemohook">
        Demo useMemo()
      </Link>
      <Link style={linkStyle()} to="/democbhook">
        Demo useCallback()
      </Link>
    </nav>
  );
};

export default Navbar;
