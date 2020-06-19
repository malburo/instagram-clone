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
import Comment from '../Comment';
import CommentForm from '../CommentForm';

PostCard.propTypes = {
  likes: PropTypes.array,
  comments: PropTypes.array,
  avatarPictureUrl: PropTypes.string.isRequired,
  postPictureUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
PostCard.defaultProps = {
  likes: [],
  comments: [],
};
function PostCard(props) {
  const { likes, comments, avatarPictureUrl, postPictureUrl, username } = props;
  return (
    <div className={styles['post-card']}>
      <div className={styles['post-card__header']}>
        <Avatar img={avatarPictureUrl} size="small" username={username} />
        <DotIcon />
      </div>
      <div className={styles['post-card__image']}>
        <img src={postPictureUrl} alt="postImage" />
      </div>
      <div className={styles['post-card__footer']}>
        <div className={styles['list-icon']}>
          <div className={styles['list-icon__left']}>
            <LikeIcon />
            <CommentIcon />
            <MessageIcon />
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
