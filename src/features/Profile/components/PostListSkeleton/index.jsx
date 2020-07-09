import React from 'react';
import Skeleton from 'react-loading-skeleton';

PostListSkeleton.propTypes = {};

function PostListSkeleton(props) {
  return (
    <div>
      <Skeleton
        width={260}
        height={260}
        count={3}
        style={{ marginTop: 30, marginRight: 10, marginLeft: 10 }}
      />
    </div>
  );
}

export default PostListSkeleton;
