import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container-fluid " style={headerStyle}>
      <h1 className="m-2 p-2">Todo -List</h1>
      <Link style={linkSyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkSyle} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#2f2fa2",
  color: "#fff",
  textAlign: "center",
};
const linkSyle = {
  fontFamily: "Manrope,san-serif",
  color: "#f64c72",
  textDecoration: "none",
  padding: "13px",
  paddingBottom: "10px",
};

export default Header;
