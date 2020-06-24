import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
PostCardImage.propTypes = {};

function PostCardImage(props) {
  return (
    <div className={styles.card}>
      <img src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" alt="" />
    </div>
  );
}

export default PostCardImage;
