import { Link } from "react-router-dom";

export const Navbar = () => {
  const textDecor = {
    textDecoration: "none",
    fontSize: "20px",
  };

  return (
    <>
      <span>NAVBAR: </span>&nbsp;
      <Link to="/" style={textDecor}>
        Home
      </Link>
      &nbsp;
      <Link to="/portfolio" style={textDecor}>
        Portfolio
      </Link>
      &nbsp;
      <Link to="/contact" style={textDecor}>
        Contact
      </Link>
    </>
  );
};
