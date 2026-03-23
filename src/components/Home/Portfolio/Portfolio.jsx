import React, { useEffect, useRef } from 'react';
import styles from './Portfolio.module.scss';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projectsData from '../../../data/projects.json';
import { useNavigate, Link } from 'react-router-dom';
import { getProjectImage } from '../../../utils/imageHelper';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const linkRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Clear refs array
    cardsRef.current = cardsRef.current.slice(0, projectsData.length);

    // Animate section title
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate "All Projects" link
    gsap.fromTo(
      linkRef.current,
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate cards from right to left with stagger
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.15, // Stagger effect
          }
        );
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleCardClick = (e, slug) => {
    e.preventDefault();
    // Navigate to project detail
    navigate(`/work/${slug}`);
  };

  return (
    <section className={styles.portfolioSection} id="portfolio" ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} ref={titleRef}>Projects</h2>
          <Link to="/projects" className={styles.viewAllLink} ref={linkRef}>
            All Projects
            <FaArrowRight className={styles.arrowIcon} />
          </Link>
        </div>

        {/* Projects Grid with Bootstrap */}
        <div className='projectHead'>


          <div className="row ">
            {projectsData.map((project, index) => (
              <div key={project.id} className="col-lg-4 col-md-6">
                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={styles.projectCard}
                  onClick={(e) => handleCardClick(e, project.slug)}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={getProjectImage(project.image)}
                      alt={project.title}
                      className={styles.projectImage}
                    />
                    <div className={styles.imageOverlay}>
                      <div className={styles.viewProject}>
                        <span>View Project</span>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                  <div className={styles.projectInfo}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div></div>
      </div>
    </section>
  );
};

export default Portfolio;
