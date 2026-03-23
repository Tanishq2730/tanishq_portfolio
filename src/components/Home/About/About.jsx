import { Link } from 'react-router-dom';
import styles from './About.module.scss';
import aboutMeImg from '../../../assets/images/me.jpg';

const About = () => {
    return (
        <section className={styles.aboutSection}>
            <div className="container">
                <div className={`row ${styles.rowCustom}`}>
                    {/* Image Column */}
                    <div className={`col-lg-5 col-md-12 ${styles.imageWrapper}`}>
                        <div className={styles.imageContainer}>
                            <img
                                src={aboutMeImg}
                                alt="Tanishq Shrivastava"
                                className={styles.profileImage}
                            />
                            {/* <div className={styles.imageOverlay}>
                                <div className={styles.overlayText}>
                                    <h3>CREATIVE DESIGNER</h3>
                                    <p>BASED IN MELBOURNE</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className={`col-lg-7 col-md-12 ${styles.contentWrapper}`}>
                        <div className={styles.content}>
                            <h2 className={styles.mainHeading}>
                                I’m a UI Developer dedicated to creating user-centric web applications. With a strong eye for design and performance, I build interfaces that are fast, responsive, and easy to use — ensuring every interaction feels smooth and meaningful.
                            </h2>
                            <Link to="/about" className={styles.ctaButton}>
                                MORE ABOUT ME
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

