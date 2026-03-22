import React from 'react';
import styles from './WorkTogether.module.scss';

const WorkTogether = () => {
  return (
    <section className={styles.workSection}>
      <div className={styles.topCircle}></div>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className={styles.leftPart}>
              <p className={styles.label}>CONTACT</p>
              <h1 className={styles.mainTitle}>
                <span>LET'S WORK</span>
                <span>TOGETHER</span>
              </h1>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 mt-5 mt-lg-0">
            <div className={styles.rightPart}>
              <div className={styles.circleWrapper}>
                <div className={styles.circle}></div>
                <div className={styles.circleInner}>
                  <span>LET'S</span>
                  <span>CONNECT!</span>
                </div>
              </div>
              <div className={styles.description}>
                <p>FEELING GOOD ABOUT A NEW PROJECT? WRITE ME WHAT'S IN YOUR MIND AND LET'S TALK ABOUT IT!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
