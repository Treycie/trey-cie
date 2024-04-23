import React from "react";
import "./about.css";
import image1 from '../../assets/image1.jpg';

const Abouts = () => {
  return (
    <div className="about" style={{ marginTop: "1rem" }}>
      <img src={image1} className="pic" />
      <div className="text">
        <h2>About Me</h2>
        <h5>FullStack Developer</h5>
        <p>
        Hey there! I'm Tracy Boateng, a passionate Full Stack Developer with a knack for crafting robust and user-friendly web applications. My journey in the realm of technology started with a curiosity-driven dive into programming languages and design principles. Since then, I've been on an exciting quest to blend creativity with functionality in every project I undertake.
        </p>
        <br />
        <p>
        What truly sets me apart is my holistic approach to problem-solving. I believe in understanding the bigger picture of a project while paying meticulous attention to the finer details. This mindset enables me to not only write clean and efficient code but also to deliver solutions that align seamlessly with client objectives and end-user needs.

Beyond coding, I'm an avid advocate for continuous learning and knowledge sharing. I'm constantly exploring emerging technologies, attending tech meetups, and engaging in online communities to stay at the forefront of industry trends. I'm excited about the opportunity to collaborate on innovative projects, tackle new challenges, and make a meaningful impact in the world of technology. Let's connect and build something awesome together!
        </p>
        <div className="data">
          <button type="submit" className="btn-2">
            <a href="#"> Hire Me</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
