import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Col } from 'reactstrap';
import Row from 'reactstrap/lib/Row';

PostListSkeleton.propTypes = {};

function PostListSkeleton(props) {
  return (
    <Row>
      <Col xs="12">
        <Skeleton />
      </Col>
      <Col xs="10">
        <Skeleton />
      </Col>
      <Col xs="6">
        <Skeleton />
      </Col>
      <Col xs="8">
        <Skeleton />
      </Col>
    </Row>
  );
}

export default PostListSkeleton;
