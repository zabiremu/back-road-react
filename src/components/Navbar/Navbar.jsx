import React from "react";
import logo from "../../assets/images/logo.svg";
import { pageLink } from "../../data";
import PageLinks from "../PageLinks/PageLinks";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <PageLinks parentClass="nav-links" childClass="nav-link" />

        </div>
      </nav>
    </>
  );
};

export default Navbar;
