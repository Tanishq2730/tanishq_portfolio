import React from 'react';
import styles from './Hero.module.scss';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.heroTitle}>
          <span>TANISHQ</span>
          <span>SHRIVASTAVA</span>
        </h1>
        <p className={styles.heroSubtitle}>
          OVER 5 YEARS OF EXPERIENCE<br />
          IN A UI DEVELOPER
        </p>
      </div>

      <div className={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/tanishq-shrivastava-322188186" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/tanishq._.s7/" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://www.facebook.com/share/1DkaAvfD5f/?mibextid=LQQJ4d" aria-label="Facebook"><FaFacebookF /></a>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.circleText}>
          <svg viewBox="0 0 100 100" width="100" height="100">
            <defs>
              <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text fontSize="12">
              <textPath xlinkHref="#circle">
                SCROLL TO EXPLORE - SCROLL TO EXPLORE -
              </textPath>
            </text>
          </svg>
          <div className={styles.arrow}>
            <FaArrowDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
