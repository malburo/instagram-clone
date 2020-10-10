import { unwrapResult } from '@reduxjs/toolkit';
import { Carousel } from 'antd';
import { CommentIcon, LikeIcon, MessageIcon, SaveIcon } from 'components/Icon';
import { comment, reaction } from 'features/Post/PostSlice';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Comment from '../Comment';
import CommentForm from '../CommentForm';
import SettingPost from '../SettingPost';
import styles from './style.module.scss';
import Avatar from 'components/Avatar';

PostCard.propTypes = {
  isLiked: PropTypes.bool,
  likes: PropTypes.array,
  comments: PropTypes.array,
  profilePictureUrl: PropTypes.string.isRequired,
  postListPictureUrl: PropTypes.array.isRequired,
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
    postListPictureUrl,
    username,
    postId,
    caption,
  } = props;

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.current);
  const isLiked = reactions.find(item => item.userId === currentUser.id);
  const handleReaction = postId => {
    async function fetchData() {
      try {
        let type = 'like';
        if (isLiked) {
          type = null;
        }
        const payload = {
          postId,
          type,
        };
        const reactionResult = await dispatch(reaction(payload));
        unwrapResult(reactionResult);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  };
  const handleComment = (postId, content, actions) => {
    async function fetchData() {
      try {
        const payload = {
          postId,
          content,
        };
        const commentResult = await dispatch(comment(payload));
        unwrapResult(commentResult);
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
        <SettingPost />
      </div>
      <div>
        <Carousel infinite adaptiveHeight draggable focusOnSelect fade>
          {postListPictureUrl.map(item => {
            const { _id, url } = item;
            return (
              <div key={_id}>
                <img
                  src={url}
                  alt="postImage"
                  className={styles['post-card__image']}
                />
              </div>
            );
          })}
        </Carousel>
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
