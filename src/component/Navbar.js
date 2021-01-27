import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <header className=" head text-white">
      <h1 style={{ textAlign: "center" }}>Berhane Beyene</h1>
      <nav className="head  text-white">
        <ul className="nav nav-tabs" id="nav-tab" role="tablist">
          <Link
            className="nav-item nav-link text-info active"
            id="nav-home-tab"
            datatoggle="tab"
            to="/"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Home
          </Link>
          <Link
            className="nav-item nav-link"
            id="nav-profile-tab"
            datatoggle="tab"
            to="/portfolio"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Portofolio
          </Link>
          <Link
            className="nav-item nav-link"
            id="nav-contact-tab"
            datatoggle="tab"
            to="/contact"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
