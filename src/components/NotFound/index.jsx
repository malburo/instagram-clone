import React from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
NotFound.propTypes = {};

function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>Whoops!</h1>
      <p>Something went wrong</p>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
