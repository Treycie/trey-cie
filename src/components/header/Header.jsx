import React from "react";
import "./header.css";
import image1 from '../../assets/image1.jpg';

const Header = () => {
  return (
    <>
      <div className="hero overflow-x-hidden">
        <div className="main md:flex-row md:justify-center md:mt-16">
          <img
            src={image1}
            alt="men"
            className="men"
            style={{ borderRadius: "999px", paddingBottom: "2rem" }}
          />
          <div className="main-detil">
            <p>Hello I'm</p>
            <h1 className="font-semibold">Tracy Boateng</h1>
            <h4>FullStack Developer</h4>
            <div className="btn">
              <button type="submit">Download CV</button>
              <button type="submit" className="btn-2">
                Hire Me
              </button>
            </div>
            <div className="social">
              <i className="bx bxl-github" />
              <i className="bx bxl-instagram" />
            </div>
          </div>
        </div>
        <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
