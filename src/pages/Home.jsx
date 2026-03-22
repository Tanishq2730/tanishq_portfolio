import React from 'react';
import Hero from '../components/Home/Hero/Hero';
import About from '../components/Home/About/About';
import Services from '../components/Home/Services/Services';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import Portfolio from '../components/Home/Portfolio/Portfolio';
import Skills from '../components/Home/Skills/Skills';
import WorkTogether from '../components/About/WorkTogether/WorkTogether';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills/>
      <Portfolio /> {/* Displaying full portfolio on home for now as it's a landing page style */}
      {/* <Testimonials /> */}
      <WorkTogether />
    </>
  );
};

export default Home;
