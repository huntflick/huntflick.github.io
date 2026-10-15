import React from 'react';
import './Projects.css';

const Projects = () => (
  <section className="projectsContainer">
    <div className="projectsContent">
      <h1>Projects</h1>
      <p>Check back soon for more information!</p>
      <div className="projectsGrid">
        <div className="projectCard">
          <p>Custom Video Game Engine</p>
          <img src="/images/video_game_engine.png" alt="Custom Video Game Engine Running a Game" />
        </div>
        <div className="projectCard">
          <p>Polyphonic Software Synthesizer</p>
          <img src="/images/synthesizer_interface.png" alt="Software Synthesizer Interface with Keyboard" />
        </div>
        <div className="projectCard">
          <p>Driving Video Game</p>
          <img src="/images/car_game.png" alt="Driving Video Game with Two Cars" />
        </div>
      </div>
    </div>
  </section>
);

export default Projects;