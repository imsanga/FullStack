import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = {
    textDecoration: "none",
    marginRight: "10px",
    color: "blue",
  };

  return (
    <>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/profile" style={linkStyle}>
        Profile
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
      <Link to="/settings" style={linkStyle}>
        Settings
      </Link>
    </>
  );
};

export default Navbar;
