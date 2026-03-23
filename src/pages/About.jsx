import React from 'react';
import PageHeader from '../components/Layout/PageHeader/PageHeader';
import AboutComponent from '../components/About/About';
import Services from '../components/Home/Services/Services';
import WorkTogether from '../components/About/WorkTogether/WorkTogether';
import Experience from '../components/About/Experience/Experience';
import Skills from '../components/Home/Skills/Skills';

const About = () => { 
  return (
    <div className="page-padding">
      <PageHeader title="About Me" />
      <AboutComponent />
      <Experience />
      <Skills/>
      <Services />
      <WorkTogether />
    </div>
  );
};

export default About;
