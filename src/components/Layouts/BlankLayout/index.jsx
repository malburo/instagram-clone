import React from 'react';
import styles from './style.module.scss';
BlankLayout.propTypes = {};

function BlankLayout(props) {
  return <div className={styles['blank-layout']}>{props.children}</div>;
}

export default BlankLayout;
