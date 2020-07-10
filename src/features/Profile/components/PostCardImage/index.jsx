import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.scss';

PostCardImage.propTypes = {
  postPictureUrl: PropTypes.string.isRequired,
};

function PostCardImage(props) {
  const { postPictureUrl } = props;
  return (
    <div className={styles.card}>
      <img src={postPictureUrl} alt="" />
    </div>
  );
}

export default PostCardImage;
