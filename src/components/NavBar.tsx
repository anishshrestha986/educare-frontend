import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/navbar.css";
import { navData } from "../lib/navData";
export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <div className="navBarWrapper">
        <Link to="/about">
          <img src={logo} alt="" className="navBarLogo" />
        </Link>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <FontAwesomeIcon icon={faBars} className="featureIcon" />
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          {navData.map((item) => {
            return (
              <NavLink
                key={item.id}
                className={
                  item.text === "Log Out" ? "navLinkLogOut" : "navLinks"
                }
                to={item.link}
              >
                {item.icon}
                <span className="linkText">{item.text}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
