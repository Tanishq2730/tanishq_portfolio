import React from 'react';
import PortfolioComponent from '../components/Home/Portfolio/Portfolio';
import WorkTogether from '../components/About/WorkTogether/WorkTogether';
import PageHeader from '../components/Layout/PageHeader/PageHeader';

const Projects = () => {
  return (
    <div className="page-padding">
      <PageHeader title="My Work" />
      <PortfolioComponent />
      <WorkTogether />
    </div>
  );
};

export default Projects;