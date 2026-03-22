import React from 'react';
import { 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiGreensock, 
  SiFigma, 
  SiWordpress, 
  SiGithub, 
  SiAngular,
  SiSass
} from 'react-icons/si';
import styles from './Skills.module.scss';

const skillList = [
  { name: 'HTML', icon: <SiHtml5 className={styles.icon} color="#E34F26" /> },
  { name: 'CSS', icon: <SiCss3 className={styles.icon} color="#1572B6" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className={styles.icon} color="#7952B3" /> },
  { name: 'JavaScript', icon: <SiJavascript className={styles.icon} color="#F7DF1E" /> },
  { name: 'React js', icon: <SiReact className={styles.icon} color="#61DAFB" /> },
  { name: 'Next js', icon: <SiNextdotjs className={styles.icon} color="#ffffff" /> },
  { name: 'GSAP', icon: <SiGreensock className={styles.icon} color="#88CE02" /> },
  { name: 'Figma', icon: <SiFigma className={styles.icon} color="#F24E1E" /> },
  { name: 'Wordpress', icon: <SiWordpress className={styles.icon} color="#21759B" /> },
  { name: 'Github', icon: <SiGithub className={styles.icon} color="#ffffff" /> },
  { name: 'Angular', icon: <SiAngular className={styles.icon} color="#DD0031" /> },
  { name: 'SCSS', icon: <SiSass className={styles.icon} color="#CC6699" /> },
];

const Skills = () => {
    // Duplicate the skill list for a seamless loop
    const displaySkills = [...skillList, ...skillList];

  return (
    <section className={styles.skillsSection} id="skills">
        <div className={styles.container}>
            <div className={styles.sectionTitle}>
                <h2>Technical Expertise</h2>
                <p>The tools and technologies I use to bring ideas to life.</p>
            </div>
            
            <div className={styles.marqueeContainer}>
                <div className={styles.marquee}>
                    {displaySkills.map((skill, index) => (
                        <div className={styles.skillCard} key={index}>
                            {skill.icon}
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Skills;

