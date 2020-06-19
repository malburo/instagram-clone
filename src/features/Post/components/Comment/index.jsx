import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
Comment.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

function Comment(props) {
  const { username, content } = props;
  return (
    <div className={styles.comment}>
      <a href="#">{username}</a>
      <span>{content}</span>
    </div>
  );
}

export default Comment;
