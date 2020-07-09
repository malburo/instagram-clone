import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import EmptyPost from '../EmptyPost';
import PostCardImage from '../PostCardImage';
import styles from './style.module.scss';
PostCardImageList.propTypes = {};

function PostCardImageList(props) {
  const profile = useSelector(state => state.profile);
  const { posts } = profile;
  const postsList = posts.map(item => {
    const { postPictureUrl } = item;
    return (
      <Col xs="4" key={item._id}>
        <div className={styles.item}>
          <PostCardImage postPictureUrl={postPictureUrl} key={item._id} />
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
