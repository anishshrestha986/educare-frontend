import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/header.css";
import Button from "./Button";
export default function Header() {
  const location = useLocation();
  useEffect(() => {}, [location]);
  // const { isAuthenticated } = useContext(AuthState);

  const linkStyle = {
    marginTop: "0rem",
    marginLeft: "4rem",
    marginRight: "4rem",
    marginBotoom: "2rem",
    textDecoration: "none",
    display: "inline-block",
  };
  return (
    <div className="headerWrapper" style={{ display: "block" }}>
      <div className="leftSide">
        <div className="logoContainer">
          <Link to="/about">
            <img src={logo} />
          </Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/about" style={linkStyle}>
          <p>About Us</p>
        </Link>
        <Link to="/contact" style={linkStyle}>
          <p>Contact</p>
        </Link>
        <Link to="/login" style={linkStyle}>
          <Button style={{ width: "150px", padding: "10px" }}>Login</Button>
        </Link>
      </div>
    </div>
  );
}
