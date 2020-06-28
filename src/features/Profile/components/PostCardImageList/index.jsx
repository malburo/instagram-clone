import React from 'react';
import { Col, Row } from 'reactstrap';
import PostCardImage from '../PostCardImage';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import EmptyPost from '../EmptyPost';
PostCardImageList.propTypes = {};

function PostCardImageList(props) {
  const profile = useSelector(state => state.profile);
  const { posts } = profile;
  const postsList = posts.map(item => {
    const { postPictureUrl } = item;
    return (
      <Col xs="4">
        <div className={styles.item}>
          <PostCardImage postPictureUrl={postPictureUrl} />
        </div>
      </Col>
    );
  });
  return (
    <Row className={styles.list}>
      {posts.length === 0 ? <EmptyPost /> : postsList}
    </Row>
  );
}

export default PostCardImageList;
