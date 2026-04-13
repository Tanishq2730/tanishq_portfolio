import React from 'react';
import PageHeader from '../components/Layout/PageHeader/PageHeader';
import ContactComponent from '../components/Contact/Contact';

const Contact = () => {
  return (
    <div className="page-padding">
      {/* <PageHeader title="Get In Touch" /> */}
      <ContactComponent />
    </div>
  );
};

export default Contact;
