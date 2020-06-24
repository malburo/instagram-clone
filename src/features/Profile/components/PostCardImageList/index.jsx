import React from 'react';
import PropTypes from 'prop-types';
import PostCardImage from '../PostCardImage';
import { Col, Row } from 'reactstrap';
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
