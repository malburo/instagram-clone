import React from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
NotFound.propTypes = {};

function NotFound() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Sorry, this page isn't available.</p>
      <p className={styles.subTitle}>
        The link you followed may be broken, or the page may have been removed.
        Go back to{' '}
        <Link to="/">
          <span>Instagram</span>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
