import React from "react";
import { useEffect } from "react";
import mixitup from 'mixitup';
import image from '../../assets/project-3.png'
import image2 from '../../assets/project-2.png'
import image3 from '../../assets/addition.png'
import "./projects.css";

const Projects = () => {
    useEffect(() => {
        const containerEl = document.querySelector('.portfolio__container');
        if (containerEl) {
          const mixer = mixitup('.portfolio__container', {
            selectors: {
              target: '.portfolio__content'
            },
            animation: {
              duration: 400
            }
          });
        }
    
        // Link active portfolio
        const numberButtons = document.querySelectorAll('.portfolio__item');
        for (let i = 0; i < numberButtons.length; i++) {
          numberButtons[i].addEventListener('click', changeButton.bind(null, i));
        }
    
        function changeButton(selected, e) {
          const oldActive = document.getElementsByClassName('active--portfolio');
          for (let i = 0; i < oldActive.length; i++) {
            oldActive[i].classList.remove('active--portfolio');
          }
          e.target.classList.add('active--portfolio');
        }
      }, []);

  return (
    <>
      <section className="portfolio section bd-container" id="portfolio">
        <span className="section-subtitle">My Recent Projects</span>
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio__nav">
          <span className="portfolio__item active--portfolio" data-filter="all">
            All
          </span>
          <span className="portfolio__item" data-filter=".web">
            Web
          </span>
          <span className="portfolio__item" data-filter=".ux">
            UI/UX
          </span>
          <span className="portfolio__item" data-filter=".app">
            App
          </span>
        </div>
        <div className="portfolio__container bd-grid">
          <div className="portfolio__content mix web">
            <a href="#" className>
              <img
                src={image3}
                alt
                className="portfolio__img"
              />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Web Development</span>
              <a href="#">
                <h2 className="portfolio__title">
                  Online Market Website
                </h2>
              </a>
              <a href="#" className="button button-link">
                View Details
              </a>
            </div>
          </div>
          <div className="portfolio__content mix web">
            <a href="https://cinematopia-1z1z0lb7e-danquahsikas-projects.vercel.app/" className>
              <img
                src={image2}
                alt
                className="portfolio__img"
              />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Web Development</span>
              <a href="#">
                <h2 className="portfolio__title">
                  Movie Streaming Website
                </h2>
              </a>
              <a href="#" className="button button-link">
                View Details
              </a>
            </div>
          </div>
          <div className="portfolio__content mix ux">
            <a href="https://tech-portfolio-lyart.vercel.app/" className>
              <img
                src={image}
                alt
                className="portfolio__img"
              />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Web Development</span>
              <a href="#">
                <h2 className="portfolio__title">
                  Generic Portfolio 
                </h2>
              </a>
              <a href="#" className="button button-link">
                View Details
              </a>
            </div>
          {/* </div>
          <div className="portfolio__content mix ux">
            <a href="#" className>
              <img
                src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-Clay-Doe/main/assets/img/work4.jpg"
                alt
                className="portfolio__img"
              />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">UI/UX</span>
              <a href="#">
                <h2 className="portfolio__title">
                  New Portfolio of work done for a client
                </h2>
              </a>
              <a href="#" className="button button-link">
                View Details
              </a>
            </div>
          </div>
          <div className="portfolio__content mix app">
            <a href="#" className>
              <img
                src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-Clay-Doe/main/assets/img/work5.jpg"
                alt
                className="portfolio__img"
              />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Mobile App</span>
              <a href="#">
                <h2 className="portfolio__title">
                  New Portfolio of work done for a client
                </h2>
              </a>
              <a href="#" className="button button-link">
                View Details
              </a>
            </div>
          </div>
          <div className="portfolio__content mix app">
            <a href="#" className>
              <img
                src="https://raw.githubusercontent.com/bedimcode/responsive-portfolio-Clay-Doe/main/assets/img/work6.jpg"
                alt
                className="portfolio__img"
              />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Mobile App</span>
              <a href="#">
                <h2 className="portfolio__title">
                  New Portfolio of work done for a client
                </h2>
              </a>
              <a href="#" className="button button-link">
                View Details
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
