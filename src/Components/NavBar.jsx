import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Mahmoud Al Hajj
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/technical-skills"
              className={
                location.pathname === "/technical-skills"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Technical Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/soft-skills"
              className={
                location.pathname === "/soft-skills"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Soft Skills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
