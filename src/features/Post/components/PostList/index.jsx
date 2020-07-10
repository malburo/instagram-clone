import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../PostCard';

PostList.propTypes = {};

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
