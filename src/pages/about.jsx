import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section className="about" data-aos="fade-in">
      <div className="grayarea"></div>
      <div className="a-cont-1">
        <div className="a-cont-1-1">
          <h2 className="a-header" data-aos="fade-right" data-aos-delay="200">
            About <br /> Zephaniah
          </h2>
          <p className="paragraph" data-aos="fade-right" data-aos-delay="400">
            I'm a multidisciplinary creative with a passion for Developing and Helping humanitarian causes.
            I'm always eager to learn and work!
          </p>
          <br />
          <hr style={{ width: '98%', margin: '4px' }} />
        </div>

        <div className="a-cont-1-2">
          <p className="a-p-2" data-aos="fade-left" data-aos-delay="200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit numquam, alias perferendis quibusdam obcaecati nihil soluta tenetur quam consequuntur earum maiores odio dolorem possimus officia corrupti, consequatur adipisci rem eaque.
          </p>
          <img src="techimage.jpg" alt="tech image" data-aos="fade-left" data-aos-delay="400" />
        </div>
      </div>
    </section>
  );
};

export default About;