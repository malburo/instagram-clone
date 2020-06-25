import React from 'react';
import styles from './style.module.scss';
const Avatar = props => {
  const { img, size } = props;
  return (
    <div className={styles.avatar}>
      <img src={img} alt="icon" className={styles[size]} />
    </div>
  );
};

export default Avatar;
