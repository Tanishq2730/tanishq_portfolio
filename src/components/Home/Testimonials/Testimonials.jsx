import React from 'react';
import styles from './Testimonials.module.scss';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Company Inc.',
    text: 'One of the best developers I have worked with. Delivered the project on time and exceeded expectations.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Marketing Manager',
    text: 'The design is absolutely stunning and user-friendly. Our conversion rates have increased significantly.'
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Founder, Startup',
    text: 'Highly professional and skilled. Solved complex problems with elegant solutions. Highly recommended!'
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div className="container">
        <h2 className={styles.sectionTitle}>What They <span>Say</span></h2>
        
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonialsData.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.id}>
                <div className={styles.testimonialCard}>
                  <FaQuoteLeft className={styles.quoteIcon} />
                  <p>"{item.text}"</p>
                  <h5>{item.name}</h5>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-indicators">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
