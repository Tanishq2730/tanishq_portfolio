import React from 'react';
import styles from './Footer.module.scss';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Tanishq Shrivastava. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
