import React from "react";
import "./marquee.css";
import Marquee from "react-fast-marquee";
import image from '../../assets/react_icon.png'
import image2 from '../../assets/express.png'
import image3 from '../../assets/tail.png'
import image4 from '../../assets/icons8-figma-48.png'
import image5 from '../../assets/js.png'
import image6 from '../../assets/mongodb_icon.png'
import image7 from '../../assets/git.png'
import image8 from '../../assets/mui.png'
import image9 from '../../assets/html.png'

const Marquees = () => {
  return (
    <Marquee classname=".hero-marquee_content">
        <div className="skill-wrapper">
          <img
            src={image4}
            loading="lazy"
            alt
            className="tools-photo"
          />
          <h1 className="hero-marquee_content-title">Figma</h1>
        </div>
        <div className="skill-wrapper">
          <img
            src={image9}
            loading="lazy"
            alt
            className="tools-photo"
          />
          <h1 className="hero-marquee_content-title">HTML</h1>
        </div>
        <div className="skill-wrapper">
          <img
            src={image8}
            loading="lazy"
            alt
            className="tools-photo"
          />
          <h1 className="hero-marquee_content-title">Material UI</h1>
        </div>
        <div className="skill-wrapper">
          <img
            src={image5}
            loading="lazy"
            alt
            className="tools-photo"
          />
          <h1 className="hero-marquee_content-title">JavaScript</h1>
        </div>
        <div className="skill-wrapper">
          <img
            src={image3}
            loading="lazy"
            alt
            className="tools-photo"
          />
          <h1 className="hero-marquee_content-title">Tailwind</h1>
        </div>
        <div className="skill-wrapper">
          <img
            src={image}
            loading="lazy"
            alt
            className="tools-photo"
          />
          <h1 className="hero-marquee_content-title">React.js</h1>
        </div>
        <div className="skill-wrapper">
          <img
            src={image2}
            loading="lazy"
            alt
            className="tools-photo"
          />
          <h1 className="hero-marquee_content-title">Express.js</h1>
        </div>
        <div className="skill-wrapper">
          <img
            src={image6}
            loading="lazy"
            alt
            className="tools-photo"
          />
          <h1 className="hero-marquee_content-title">MongoDB</h1>
        </div>
        <div className="skill-wrapper">
          <img
            src={image7}
            loading="lazy"
            alt
            className="tools-photo"
          />
          <h1 className="hero-marquee_content-title">Github</h1>
        </div>
    </Marquee>
  );
};

export default Marquees;
