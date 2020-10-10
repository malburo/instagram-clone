import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
Comment.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

function Comment(props) {
  const { username, content } = props;
  return (
    <div className={styles.comment}>
      <Link to={username}>{username}</Link>
      <span>{content}</span>
    </div>
  );
}

export default Comment;
