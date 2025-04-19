import React from 'react';
import Skillist from './skillist';

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="exs-header">Skills</h2>
      <div className="skills-content">
        <div className="skill-list-container">
          <Skillist />
        </div>
        <div className="e-img">
          <video
            src="techvid.mp4"
            className="skill-video"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
