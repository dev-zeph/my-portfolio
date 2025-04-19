import React from 'react';
import Explist from './explist';

const Experience = () => {
  return (
    <section className="experienceandskills" data-aos="fade-in">
      <div className="experience">
        <h2 className="exs-header" data-aos="fade-up" data-aos-delay="200">
          Experience
        </h2>
        <div className="experience-content" data-aos="fade-up" data-aos-delay="400">
          <Explist />
          <div className="e-img">
            <img
              src="projects.png"
              className="project-image"
              alt="image of created websites"
              data-aos="zoom-in"
              data-aos-delay="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;