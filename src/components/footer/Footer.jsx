import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="foo">
    <footer className="foot">
      <div className="footer__container">
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/sika-danquah-04b782139/" className="footer__link">
            <i className="bx bxl-linkedin" />
          </a>
          <a href="https://github.com/DanquahSika" className="footer__link" id="profile-link" target="_blank">
            <i className="bx bxl-github" />
          </a>
          <a href="#" className="footer__link">
            <i className="bx bxl-figma" />
          </a>
          <a href="#" className="footer__link">
            <i className="bx bxl-codepen" />
          </a>
          <a href="#" className="footer__link">
            <i className="fas fa-bolt" />
          </a>
        </div>
        <p className="footer__copy">
          © 2024 Tracy Boateng. All rights reserved
        </p>
      </div>
      <div className="wave-main">
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
      </div>
    </footer>
  </div>
  
  );
};

export default Footer;
