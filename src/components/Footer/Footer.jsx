import React, { useState } from "react";
import { copyright } from "../../data";
import { pageLink } from "../../data";
import PageLinks from "../PageLinks/PageLinks";
const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <PageLinks parentClass="footer-links" childClass="footer-link" />
        <p className="copyright">copyright &copy; {copyright.text}<span id="date"></span> </p>
      </footer>
    </>
  );
};

export default Footer;
