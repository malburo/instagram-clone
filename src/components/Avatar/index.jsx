import React from 'react';
import styles from './style.module.scss';
const Avatar = props => {
  return (
    <div className={styles.avatar}>
      <img src={props.img} alt="icon" className={props.size} />
      {props.username && <a href="#">{props.username}</a>}
    </div>
  );
};

export default Avatar;
