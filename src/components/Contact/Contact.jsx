import React from 'react';
import styles from '../../components/Contact/Contact.module.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className="container">
        <h2 className={styles.sectionTitle}>Let's <span>Work Together</span></h2>
        
        <div className="row">
          <div className="col-lg-5">
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <div className={styles.icon}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h5>Location</h5>
                  <p>Melbourne, Australia</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.icon}>
                  <FaPhoneAlt />
                </div>
                <div>
                  <h5>Phone</h5>
                  <p>+61 123 456 789</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.icon}>
                  <FaEnvelope />
                </div>
                <div>
                  <h5>Email</h5>
                  <p>hello@example.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7">
            <form className={styles.contactForm}>
              <div className="row">
                <div className="col-md-6">
                  <input type="text" className={styles.formControl} placeholder="Your Name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" className={styles.formControl} placeholder="Your Email" required />
                </div>
              </div>
              <input type="text" className={styles.formControl} placeholder="Subject" required />
              <textarea className={styles.formControl} placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
