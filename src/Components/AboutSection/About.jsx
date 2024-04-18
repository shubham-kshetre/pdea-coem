import React from 'react';
import '../AboutSection/about.css';
import FacultyContact from '../ContactSection/FacultyContact';

const About = () => {
  return (
    <>
      <section>
        <div class="containers">
          <div class="left"></div>
          <div class="right">
            <div class="content">
              <h1>About University</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos nostrum eius porro, ut aliquam quae sint praesentium voluptatum, repudiandae vero consectetur labore fugit voluptates saepe doloribus eaque fugiat officia, dolorum esse odit possimus beatae mollitia! Enim quod sed ipsam vero, blanditiis inventore, voluptates eaque aspernatur eos odit sunt consequatur..</p>
              <a href="#" class="btn">
                View more
              </a>
            </div>
          </div>
        </div>
        <FacultyContact/>
      </section>
    </>
  );
}

export default About;
