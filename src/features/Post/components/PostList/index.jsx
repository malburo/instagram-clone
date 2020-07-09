import React from 'react';
import PostCard from '../PostCard';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

PostList.propTypes = {
  isFetching: PropTypes.bool,
};

function PostList(props) {
  const posts = useSelector(state => state.posts);
  const postsList = posts.map(post => {
    const { userId, postPictureUrl, caption, likes, comments, _id } = post;
    return (
      <PostCard
        key={_id}
        postId={_id}
        profilePictureUrl={userId.profilePictureUrl}
        username={userId.username}
        postPictureUrl={postPictureUrl}
        caption={caption}
        likes={likes}
        comments={comments}
      />
    );
  });
  return <div>{postsList}</div>;
}

export default PostList;
