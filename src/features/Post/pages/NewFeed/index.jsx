import PostList from 'features/Post/components/PostList';
import React, { useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import PostForm from 'features/Post/components/PostForm';
import { useDispatch } from 'react-redux';
import API from 'utils/API';
import { setPost, createPost } from 'features/Post/PostSlice';
import Sider from 'components/Sider';

NewfeedPage.propTypes = {};

function NewfeedPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await API.call('get', 'posts');
      dispatch(setPost(response.posts));
    }
    fetchData();
  }, [dispatch]);
  const handleSubmitPostForm = async (newPost, actions) => {
    try {
      let formData = new FormData();
      formData.append('caption', newPost.caption);
      formData.append('postImage', newPost.file);
      const response = await API.call('post', 'posts/create', formData);
      dispatch(createPost(response.newPost));
      actions.resetForm();
    } catch (e) {
      console.log('Tạo bài viết không thành công');
    }
  };
  return (
    <Container style={{ paddingTop: 100 }}>
      <Row>
        <Col xs="auto">
          <Row>
            <Col>
              <PostForm onSubmit={handleSubmitPostForm} />
            </Col>
          </Row>
          <Row>
            <Col>
              <PostList />
            </Col>
          </Row>
        </Col>
        <Col xs="4">
          <Sider />
        </Col>
      </Row>
    </Container>
  );
}

export default NewfeedPage;
