import { Link } from "react-router-dom";

const textDecor = {
  textDecoration: "none",
  fontSize: "20px",
};

export const Navbar = () => {
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
