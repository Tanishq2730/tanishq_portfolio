import React from 'react';
import styles from './Experience.module.scss';

const experienceData = [
  {
    company: 'AZSM Enterprises',
    location: 'Bangalore, India',
    period: 'Nov 2024 - Present',
    details: [
      'Designed and developed responsive, user-friendly web UIs following UI/UX best practices in collaboration with design and dev teams.',
      'Customized WordPress themes and managed content updates as per client needs.',
      'Built dynamic web apps using React.js with reusable components and REST API integrations.',
      'Enhanced website UI/UX by blending design thinking with front-end skills.',
      'Participated in code reviews and sprint meetings to ensure alignment with client goals.'
    ]
  },
  {
    company: 'PHPPOETS Pvt. Limited',
    location: 'Udaipur (Raj.), India',
    period: 'Apr 2021 - Nov 2024',
    details: [
      'Developed responsive, cross-browser user interfaces using HTML5, CSS3, and Bootstrap.',
      'Customized WordPress themes and managed content updates based on client needs.',
      'Built React.js components with structured pages, interactive features, and UI/UX best practices.',
      'Collaborated with backend teams and integrated REST APIs to deliver projects on time, ensuring SEO-friendly structure and optimized performance.'
    ]
  },
  {
    company: 'nDimension Studio (Internship)',
    location: 'Udaipur (Raj.), India',
    period: 'Jun 2019 - Nov 2019',
    details: [
      'Built a foundation in HTML, CSS, Bootstrap, and JavaScript for responsive UI development.',
      'Assisted in front-end tasks, layout adjustments, and basic website structures.',
      'Analyzed existing codebases to strengthen debugging and problem-solving skills.',
      'Gained exposure to real-world workflows by participating in team meetings and shadowing senior developers.'
    ]
  }
];

const Experience = () => {
  return (
    <section className={styles.experienceSection} id="experience">
      <div className="container">
        {/* Section Title */}
        <div className={styles.titleWrapper}>
          <span className={styles.subtitle}>RESUME</span>
          <h2>Work <span>Experience</span></h2>
        </div>

        {/* Timeline Container */}
        <div className={styles.timeline}>
          {experienceData.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              {/* Timeline Indicator */}
              <div className={styles.timelineDot}></div>
              
              {/* Content Card */}
              <div className={styles.contentCard}>
                <div className={styles.header}>
                  <div className={styles.companyInfo}>
                    <h3>{item.company}</h3>
                    <span className={styles.location}>{item.location}</span>
                  </div>
                  <div className={styles.dateRange}>
                    {item.period}
                  </div>
                </div>

                <div className={styles.details}>
                  <ul>
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
