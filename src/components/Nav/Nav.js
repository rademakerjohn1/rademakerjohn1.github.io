import React from "react";
import "./Nav.css";
import NavItem from "../NavItem/NavItem"

function Nav() {
  return (
    <nav className="navbar navbar-light sticky-top">
      <a className="navbar-brand" href="#">
        <img src={require("./logo.svg")} width="30" alt="logo" />
      </a>
      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <NavItem section="about" iconClass="fas fa-comment" />
          <NavItem section="portfolio" iconClass="fas fa-folder-open" />
          <NavItem section="contact" iconClass="fas fa-address-book" />
        </ul>
      </div>
    </nav>
  )
}

export default Nav;