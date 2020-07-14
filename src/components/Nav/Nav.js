import React from "react";
import "./Nav.css";
import NavItem from "../NavItem/NavItem"

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light sticky-top">
      <a className="navbar-brand" href="#">
        <img src={require("./logo.svg")} width="30" alt="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <NavItem section="about" iconClass="fas fa-comment" />
          <NavItem section="portfolio" iconClass="fas fa-folder-open" />
          <NavItem section="contact" iconClass="fas fa-address-book" />
        </ul>
      </div>
    </nav>
  )
}

export default Nav;