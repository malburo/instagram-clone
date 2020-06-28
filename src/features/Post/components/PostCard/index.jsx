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
import { useDispatch, useSelector } from 'react-redux';
import API from 'utils/API';
import { like, unlike, setComment } from 'features/Post/PostSlice';
PostCard.propTypes = {
  isLiked: PropTypes.bool,
  likes: PropTypes.array,
  comments: PropTypes.array,
  profilePictureUrl: PropTypes.string.isRequired,
  postPictureUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
PostCard.defaultProps = {
  likes: [],
  comments: [],
  isLiked: false,
};
function PostCard(props) {
  const {
    likes,
    comments,
    profilePictureUrl,
    postPictureUrl,
    username,
    postId,
    caption,
  } = props;
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user._id);
  const isLiked = likes.find(item => item.userId === userId);
  const handleLike = postId => {
    async function fetchData() {
      const data = { postId };
      try {
        if (!isLiked) {
          const response = await API.call('post', 'likes/like', data);
          dispatch(like(response.like));
        } else {
          const response = await API.call('post', 'likes/unlike', data);
          dispatch(unlike(response.data));
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  };
  const handleComment = (postId, content, actions) => {
    async function fetchData() {
      const { comment } = content;
      const data = { postId, comment };
      try {
        const response = await API.call('post', 'comments/create', data);
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
          <Avatar img={profilePictureUrl} size="small" />
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
              <LikeIcon
                isLiked={!!isLiked}
                postId={postId}
                handleLike={handleLike}
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
          {likes.length > 0 && <span>{likes.length} lượt thích</span>}
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
