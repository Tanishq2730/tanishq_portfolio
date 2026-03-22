import React from 'react';
import styles from './About.module.scss';
import aboutMeImg from '../../assets/images/me.jpg';

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img
              src={aboutMeImg}
              alt="About Me"
              className={styles.aboutImg}
            />
          </div>
          <div className="col-lg-7">
            <div className={styles.aboutContent}>
              <h2>About <span>Me</span></h2>
              <p>
                I’m a UI Developer with 5+ years of experience and a B.Tech graduate (2020). I specialize in creating responsive and high-performance web applications using React.js. 
              </p>
              <p>
                I focus on transforming complex ideas into intuitive digital experiences that not only look visually appealing but also deliver seamless usability. With a strong eye for design and performance, I aim to create products that enhance user engagement and drive real impact.
              </p>

              <div className={styles.skills}>
                <span className={styles.skillTag}>HTML</span>
                <span className={styles.skillTag}>CSS</span>
                <span className={styles.skillTag}>Bootstrap</span>
                <span className={styles.skillTag}>React JS</span>
                <span className={styles.skillTag}>SASS/SCSS</span>
                <span className={styles.skillTag}>JavaScript</span>
                <span className={styles.skillTag}>Next JS</span>
                <span className={styles.skillTag}>GSAP</span>
                <span className={styles.skillTag}>Figma</span>
                <span className={styles.skillTag}>Wordpress</span>
                <span className={styles.skillTag}>Angular</span>
                <span className={styles.skillTag}>Git & GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
