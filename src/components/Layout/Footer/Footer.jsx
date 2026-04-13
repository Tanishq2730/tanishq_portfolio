import React from 'react';
import styles from './Footer.module.scss';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/tanishq-shrivastava-322188186" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/tanishq._.s7/" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.facebook.com/share/1DkaAvfD5f/?mibextid=LQQJ4d" aria-label="Facebook"><FaFacebookF /></a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Tanishq Shrivastava. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
