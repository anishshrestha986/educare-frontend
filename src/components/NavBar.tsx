import { faAnglesLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/dashboard/navbar.css";
import { navData } from "../lib/navData";
export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  return (
    <>
      <div
        className={isNavExpanded ? "navBarWrapper expanded" : "navBarWrapper"}
      >
        <div>
          <Link to="/about">
            <img
              src={logo}
              alt=""
              className={isNavExpanded ? "navBarLogo" : "navBarLogo hidden"}
            />
          </Link>

          <button
            className={
              isNavExpanded ? "toggler arrowLeft" : "toggler hamburger"
            }
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {isNavExpanded ? (
              <FontAwesomeIcon icon={faAnglesLeft} className="featureIcon" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="featureIcon" />
            )}
          </button>
        </div>

        <div
          className={
            isNavExpanded ? "navLinksWrapper expanded" : "navLinksWrapper"
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
                <span className={isNavExpanded ? "linkText" : "linkTextClosed"}>
                  {item.text}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
