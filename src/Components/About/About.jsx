import React from 'react';
import './About.css';

const About = () => (
  <section className="about-container">
    <div className="about-content">
      <h1>About</h1>
      <p>
        {`My name is Hunter Flick and I am recent graduate from the University of Notre Dame with a degree in Computer Science.
        My experience includes full stack development, distributed computing, graphics programming, video game engines, and
        hardware design. The bulk of my experience is in C, C++, and Python.`}
      </p>
      <p>
        {`This site is meant to be a portfolio for my projects as well as a project itself. I will update this site in my free
        time, adding more projects, deeper explanations, or simply improving the look of the site itself.`}
      </p>
      <p>
        If you are interested in my work or are hiring for a position, please reach out to me at <a href="mailto:hunterflick04@gmail.com">Send Email</a>.
      </p>
    </div>
  </section>
);

export default About;