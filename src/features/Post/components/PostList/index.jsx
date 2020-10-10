import PostCardSkeleton from 'features/Post/components/PostCardSkeleton';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PostCard from '../PostCard';
PostList.propTypes = {};

function PostList(props) {
  const { fetchMoreData, posts } = props;
  const { postList, totalPost } = posts;
  const postsList = postList.map(post => {
    const {
      userId,
      postListPictureUrl,
      caption,
      reactions,
      comments,
      id,
    } = post;
    const { profilePictureUrl, username } = userId;
    return (
      <PostCard
        key={id}
        username={username}
        postListPictureUrl={postListPictureUrl}
        postId={id}
        profilePictureUrl={profilePictureUrl}
        caption={caption}
        reactions={reactions}
        comments={comments}
      />
    );
  });
  return (
    <InfiniteScroll
      dataLength={postsList.length}
      next={fetchMoreData}
      hasMore={postsList.length < totalPost}
      loader={<PostCardSkeleton />}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }>
      {postsList}
    </InfiniteScroll>
  );
}

export default PostList;
