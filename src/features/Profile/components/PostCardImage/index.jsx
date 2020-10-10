import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.scss';

PostCardImage.propTypes = {
  postListPictureUrl: PropTypes.array.isRequired,
};

function PostCardImage(props) {
  const { postListPictureUrl } = props;
  return (
    <div className={styles.card}>
      <img src={postListPictureUrl[0].url} alt="post_image" />
    </div>
  );
}

export default PostCardImage;
