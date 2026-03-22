import React from 'react';
import PortfolioComponent from '../components/Home/Portfolio/Portfolio';
import WorkTogether from '../components/About/WorkTogether/WorkTogether';

const Projects = () => {
  return (
    <div className="page-padding">
      <PortfolioComponent />
      <WorkTogether />
    </div>
  );
};

export default Projects;