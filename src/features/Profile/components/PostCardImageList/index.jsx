import React from 'react';
import { Col, Row } from 'reactstrap';
import PostCardImage from '../PostCardImage';
import styles from './style.module.scss';
PostCardImageList.propTypes = {};

function PostCardImageList(props) {
  return (
    <Row className={styles.list}>
      <Col xs="4">
        <div className={styles.item}>
          <PostCardImage />
        </div>
      </Col>
      <Col xs="4">
        <div className={styles.item}>
          <PostCardImage />
        </div>
      </Col>
      <Col xs="4">
        <div className={styles.item}>
          <PostCardImage />
        </div>
      </Col>
      <Col xs="4">
        <div className={styles.item}>
          <PostCardImage />
        </div>
      </Col>
    </Row>
  );
}

export default PostCardImageList;
