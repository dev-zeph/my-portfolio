import React from 'react';

const Contact = () => {
  return (
    <section className="contact" data-aos="fade-in">
      <div className="c-1">
        <h2 className="c-header" data-aos="fade-up" data-aos-delay="200">
          Reach Out!
        </h2>
        <p className="c-text" data-aos="fade-up" data-aos-delay="400">
          I’d love to work and learn
        </p>
      </div>

      <div className="c-2">
        <div className="wave-container" data-aos="fade-up" data-aos-delay="600">
          <svg className="wave-svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path
              className="wave-path"
              d="M0,30 Q150,10 300,30 T600,30 T900,30 T1200,30"
            />
            <path
              className="wave-path"
              d="M0,35 Q150,15 300,35 T600,35 T900,35 T1200,35"
            />
            <path
              className="wave-path"
              d="M0,40 Q150,20 300,40 T600,40 T900,40 T1200,40"
            />
          </svg>
        </div>
        <div className="c-2-1" data-aos="fade-up" data-aos-delay="800">
          <button className="c-b">Software Development</button>
          <button className="c-b">Non-profit / charity work</button>
          <button className="c-b">Volunteer work</button>
        </div>

        <div className="c-2-2" data-aos="fade-up" data-aos-delay="1000">
          <button className="c-b">UI/UX Design</button>
          <button className="c-b">Database Management</button>
          <button className="c-b">Integrated Marketing</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;