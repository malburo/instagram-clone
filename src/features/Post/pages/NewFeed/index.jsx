import PostList from 'features/Post/components/PostList';
import React from 'react';
import { Container, Row } from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import PostForm from 'features/Post/components/PostForm';

NewfeedPage.propTypes = {};

function NewfeedPage(props) {
  return (
    <Container style={{ paddingTop: 100 }}>
      <Row>
        <Col>
          <PostForm />
        </Col>
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
