import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <section className="homepage" data-aos="fade-in">
      {/* Header Section */}
      <h1 className="name" data-aos="fade-down" data-aos-delay="200">
        Chizulu <br />
        Zephaniah
      </h1>
      <h2 className="job" data-aos="fade-down" data-aos-delay="400">
        Humanitarian, <br /> Software Developer
      </h2>

      {/* About Section */}
      <p className="header" data-aos="fade-up" data-aos-delay="600">
        PORTFOLIO
      </p>

      <div className="arrow-container" data-aos="fade-up" data-aos-delay="800">
        <img className="arrow" src="arrow.png" alt="arrow" />
      </div>
    </section>
  );
};

export default Home;