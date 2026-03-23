import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProjectDetail.module.scss';
import projectsData from '../../data/projects.json';
import { FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiBootstrap, 
  SiSass, SiFirebase, SiRedux, SiHtml5, SiCss3, 
  SiJavascript, SiNextdotjs, SiTailwindcss, SiPostgresql,
  SiMaterialdesign, SiFramer, SiMysql, SiExpo, SiWordpress
} from 'react-icons/si';
import { getProjectImage } from '../../utils/imageHelper';

gsap.registerPlugin(ScrollTrigger);

const techIcons = {
  'React': <SiReact style={{color: '#61DAFB'}}/>,
  'Node.js': <SiNodedotjs style={{color: '#339933'}}/>,
  'Express': <SiExpress style={{color: '#000000'}}/>,
  'MongoDB': <SiMongodb style={{color: '#47A248'}}/>,
  'Bootstrap': <SiBootstrap style={{color: '#7952B3'}}/>,
  'SCSS': <SiSass style={{color: '#CC6699'}}/>,
  'Firebase': <SiFirebase style={{color: '#FFCA28'}}/>,
  'React Native': <SiExpo style={{color: '#000020'}}/>,
  'Redux': <SiRedux style={{color: '#764ABC'}}/>,
  'HTML5': <SiHtml5 style={{color: '#E34F26'}}/>,
  'CSS3': <SiCss3 style={{color: '#1572B6'}}/>,
  'JavaScript': <SiJavascript style={{color: '#F7DF1E'}}/>,
  'AOS': <SiJavascript style={{color: '#F7DF1E'}}/>,
  'Next.js': <SiNextdotjs style={{color: '#000000'}}/>,
  'Next Js': <SiNextdotjs style={{color: '#000000'}}/>,
  'Tailwind CSS': <SiTailwindcss style={{color: '#06B6D4'}}/>,
  'Framer Motion': <SiFramer style={{color: '#0055FF'}}/>,
  'PostgreSQL': <SiPostgresql style={{color: '#4169E1'}}/>,
  'Material UI': <SiMaterialdesign style={{color: '#0081CB'}}/>,
  'GSAP': <SiJavascript style={{color: '#F7DF1E'}}/>,
  'MySQL': <SiMysql style={{color: '#4479A1'}}/>,
  'Wordpress': <SiWordpress style={{color: '#21759B'}}/>,
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const mockupRef = useRef(null);

  useEffect(() => {
    const currentProject = projectsData.find(p => p.slug === slug);
    if (currentProject) {
      setProject(currentProject);
      window.scrollTo(0, 0);
      
      // Animations
      gsap.fromTo(`.${styles.mockupWrapper}`, 
        { scale: 0.8, opacity: 0, x: -50 }, 
        { scale: 1, opacity: 1, x: 0, duration: 1, ease: "power4.out", delay: 0.3 }
      );

      gsap.fromTo(`.${styles.contentWrapper} > *`, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.5 }
      );

      gsap.fromTo(`.${styles.laptopMockup}`, 
        { opacity: 0, y: 100 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", scrollTrigger: {
          trigger: `.${styles.laptopMockup}`,
          start: "top 90%",
        }}
      );
    }
  }, [slug]);

  if (!project) {
    return (
      <div className={styles.projectNotFound}>
        <div className={styles.container}>
          <h2>Project Not Found</h2>
          <Link to="/projects" className={styles.backBtn}>Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.projectDetail} ref={containerRef}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link to="/">Home</Link> <FaChevronRight size={10} className={styles.arrowIcon} /> 
          <Link to="/projects">Work</Link> <FaChevronRight size={10} className={styles.arrowIcon} /> 
          <span>{project.title}</span>
        </nav>

        {/* Top Info Section */}
        <section className={styles.topSection}>
          <div className={styles.mockupWrapper} ref={mockupRef}>
            <div className={styles.phoneFrame}>
               <img 
                src={getProjectImage(project.image)} 
                alt={project.title} 
                className={styles.mainImage} 
              />
            </div>
          </div>

          <div className={styles.contentWrapper}>
            <span className={styles.category}>{project.category}</span>
            <h1 className={styles.title} ref={titleRef}>{project.title}</h1>
            <p className={styles.description}>
              {project.description}
            </p>

            <div className={styles.techSection}>
              <h4>Tech Stack</h4>
              <div className={styles.techList}>
                {project.tech.map((name, index) => (
                  <div key={index} className={styles.techItem}>
                    {/* <span className={styles.icon}>
                      {techIcons[name] || <SiJavascript />}
                    </span> */}
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.visitBtn}
            >
              Examine Work <FaExternalLinkAlt className={styles.icon} />
            </a>
          </div>
        </section>

        {/* Showcase Section */}
        <section className={styles.showcaseSection}>
          <div className={styles.showcaseTitle}>
            <h2>Dynamic Visuals</h2>
            <p>A closer look at the full website experience.</p>
          </div>
          
          <div className={styles.laptopMockup}>
            <div className={styles.laptopScreen}>
              <div className={styles.screenContent}>
                <img 
                  src={getProjectImage(project.longImage)} 
                  alt={`${project.title} Full Showcase`} 
                  className={styles.scrollableImage} 
                />
              </div>
            </div>
            <div className={styles.laptopBase}>
              <div className={styles.baseCenter}></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
