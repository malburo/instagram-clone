import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import styles from './style.module.scss';
import {
  LikeIcon,
  CommentIcon,
  MessageIcon,
  SaveIcon,
  DotIcon,
} from 'components/Icon';
import CommentForm from '../CommentForm';
import Comment from '../Comment';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
PostCard.propTypes = {
  likes: PropTypes.array,
  comments: PropTypes.array,
  profilePictureUrl: PropTypes.string.isRequired,
  postPictureUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
PostCard.defaultProps = {
  likes: [],
  comments: [],
};
function PostCard(props) {
  const {
    likes,
    comments,
    profilePictureUrl,
    postPictureUrl,
    username,
  } = props;
  return (
    <div className={styles['post-card']} style={{ backgroundColor: '#fff' }}>
      <div className={styles['post-card__header']}>
        <div className={styles.infoUser}>
          <Avatar
            img={profilePictureUrl}
            size="small"
            className={styles.avatar}
          />
          <Link to={username}>{username}</Link>
        </div>
        <DotIcon />
      </div>
      <div className={styles['post-card__image']}>
        <img src={postPictureUrl} alt="postImage" />
      </div>
      <div className={styles['post-card__footer']}>
        <div className={styles['list-icon']}>
          <div className={styles['list-icon__left']}>
            <span className={styles['icon-footer']}>
              <LikeIcon />
            </span>
            <span className={styles['icon-footer']}>
              <CommentIcon />
            </span>
            <span className={styles['icon-footer']}>
              <MessageIcon />
            </span>
          </div>
          <div className={styles['list-icon__right']}>
            <SaveIcon />
          </div>
        </div>
        <div className={styles['number-of-likes']}>
          {likes.length > 0 && <span>{likes.length} lượt thích</span>}
        </div>
        <div>
          {comments.map(comment => {
            return (
              <Comment
                username={comment.userId.username}
                content={comment.content}
              />
            );
          })}
        </div>
        <CommentForm />
      </div>
    </div>
  );
}

export default PostCard;
