import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import PostList from 'features/Post/components/PostList';


NewfeedPage.propTypes = {};

function NewfeedPage(props) {
  return (
    <Container style={{ paddingTop: 100 }}>
      <Row>
        <Col>{/* <PostForm /> */}</Col>
      </Row>
      <Row>
        <Col>
          <PostList />
        </Col>
      </Row>
    </Container>
  );
}

export default NewfeedPage;
