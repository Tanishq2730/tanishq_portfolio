import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageHeader.module.scss';

const PageHeader = ({ title, parent, parentLink }) => {
  return (
    <section className={styles.pageHeader}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        <nav className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span className={styles.separator}>/</span>
          {parent && (
            <>
              <Link to={parentLink}>{parent}</Link>
              <span className={styles.separator}>/</span>
            </>
          )}
          <span className={styles.current}>{title}</span>
        </nav>
      </div>
    </section>
  );
};

export default PageHeader;
