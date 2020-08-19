import postsApi from 'api/postsApi';
import Avatar from 'components/Avatar';
import {
  CommentIcon,
  DotIcon,
  LikeIcon,
  MessageIcon,
  SaveIcon,
} from 'components/Icon';
import { setComment, setReaction } from 'features/Post/PostSlice';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Comment from '../Comment';
import CommentForm from '../CommentForm';
import styles from './style.module.scss';

PostCard.propTypes = {
  isLiked: PropTypes.bool,
  likes: PropTypes.array,
  comments: PropTypes.array,
  profilePictureUrl: PropTypes.string.isRequired,
  postPictureUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
PostCard.defaultProps = {
  reactions: [],
  comments: [],
  isLiked: false,
};
function PostCard(props) {
  const {
    reactions,
    comments,
    profilePictureUrl,
    postPictureUrl,
    username,
    postId,
    caption,
  } = props;

  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user._id);
  const isLiked = reactions.find(item => item.userId === userId);

  const handleReaction = postId => {
    async function fetchData() {
      try {
        let type = 'like';
        if (isLiked) {
          type = null;
        }
        const response = await postsApi.reaction(postId, type);
        dispatch(setReaction(response.reaction));
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  };
  const handleComment = (postId, comment, actions) => {
    async function fetchData() {
      try {
        const response = await postsApi.comment(postId, comment);
        dispatch(setComment(response.data));
        actions.resetForm();
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  };
  return (
    <div className={styles['post-card']} style={{ backgroundColor: '#fff' }}>
      <div className={styles['post-card__header']}>
        <div className={styles.infoUser}>
          <Link to={username}>
            <Avatar img={profilePictureUrl} size="small" />
          </Link>
          <Link to={username}>{username}</Link>
        </div>
        <DotIcon />
      </div>
      <div>
        <img
          src={postPictureUrl}
          alt="postImage"
          className={styles['post-card__image']}
        />
      </div>
      <div className={styles['post-card__footer']}>
        <div className={styles['list-icon']}>
          <div className={styles['list-icon__left']}>
            <span className={styles['icon-footer']}>
              <LikeIcon
                isLiked={!!isLiked}
                postId={postId}
                handleReaction={handleReaction}
              />
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
          {reactions.length > 0 && <span>{reactions.length} lượt thích</span>}
        </div>
        <div>
          {caption !== '' && (
            <Comment username={username} content={caption} key="caption" />
          )}
          {comments.map(comment => {
            return (
              <Comment
                username={comment.userId.username}
                content={comment.content}
                key={comment._id}
              />
            );
          })}
        </div>
        <CommentForm postId={postId} onSubmit={handleComment} />
      </div>
    </div>
  );
}

export default PostCard;
