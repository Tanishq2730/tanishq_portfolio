import React, { useEffect, useRef } from 'react';
import styles from './Contact.module.scss';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.header} > *`, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power4.out'
        }
      );

      gsap.fromTo(`.${styles.detailCard}, .${styles.whatsappBanner}`,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.3
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      info: 'Udaipur, Rajasthan, India',
      link: 'https://maps.google.com/?q=Udaipur,Rajasthan',
      actionText: 'Get Directions'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      info: 'tanishq.shrivastava.146@gmail.com',
      link: 'mailto:tanishq.shrivastava.146@gmail.com',
      actionText: 'Drop a Mail'
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Mobile No.',
      info: '+91 8824470143',
      link: 'tel:+918824470143',
      actionText: 'Call Now'
    }
  ];

  return (
    <section className={styles.contactSection} ref={sectionRef}>
      <div className={styles.container}>
        
        <div className={styles.header}>
            <span className={styles.subtitle}>Get In Touch</span>
            <h1 className={styles.title}>Contact Me Directly</h1>
            <p className={styles.description}>
                I value direct and meaningful communication. Whether you have a visionary project in mind, wish to discuss professional opportunities, or simply want to connect, I invite you to reach out directly through any of the channels below.
            </p>
        </div>

        <div className={styles.cardsGrid}>
          {contactDetails.map((item, index) => (
            <div 
              key={index} 
              className={styles.detailCard}
            >
              <div className={styles.iconCircle}>
                {item.icon}
              </div>
              <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.info}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                    {item.actionText} <FaArrowRight />
                  </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.whatsappBanner}>
          <div className={styles.whatsappContent}>
             <div className={styles.waIcon}>
                 <FaWhatsapp />
             </div>
             <div className={styles.waText}>
                 <h2>Message me on WhatsApp</h2>
                 <p>For the fastest response, send me a message directly!</p>
             </div>
          </div>
          <a 
            href="https://wa.me/918824470143" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.waButton}
          >
            Start Chat <FaWhatsapp className={styles.btnIcon} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
