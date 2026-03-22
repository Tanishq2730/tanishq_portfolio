import React from 'react';
import styles from './Services.module.scss';
import { FaCode, FaPaintBrush, FaMobileAlt, FaSearch } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Building fast, scalable, and responsive web applications using modern technologies like React.js. Focused on clean code, performance, and seamless user experience.'
  },
  {
    id: 2,
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually engaging interfaces that enhance user experience. Turning ideas into clean, user-friendly, and impactful digital designs.'
  },
  // {
  //   id: 3,
  //   icon: <FaMobileAlt />,
  //   title: 'Mobile Apps',
  //   description: 'Developing cross-platform mobile applications that run smoothly on both iOS and Android devices.'
  // },
  {
    id: 4,
    icon: <FaSearch />,
    title: 'SEO Optimization',
    description: 'Improving website visibility and performance through SEO best practices. Helping businesses rank higher and attract quality organic traffic.'
  }
];

const Services = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <div className="container">
        <h2 className={styles.sectionTitle}>What I <span>Do</span></h2>
        <div className="row g-4">
          {servicesData.map(service => (
            <div className="col-md-6 col-lg-4" key={service.id}>
              <div className={styles.serviceCard}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
