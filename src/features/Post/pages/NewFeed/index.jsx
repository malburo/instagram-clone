import Sider from 'components/Sider';
import PostCardSkeleton from 'features/Post/components/PostCardSkeleton';
import PostForm from 'features/Post/components/PostForm';
import PostList from 'features/Post/components/PostList';
import { createPost, setPost } from 'features/Post/PostSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row } from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import styles from './style.module.scss';
import postsApi from 'api/postsApi';
NewfeedPage.propTypes = {};

function NewfeedPage(props) {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPostList() {
      try {
        setIsFetching(true);
        const response = await postsApi.get();
        setIsFetching(false);
        dispatch(setPost(response.posts));
      } catch (e) {
        setIsFetching(false);
        console.log(e);
      }
    }
    fetchPostList();
  }, [dispatch]);
  const handleSubmitPostForm = async (newPost, actions) => {
    try {
      const { caption, file } = newPost;
      let formData = new FormData();
      formData.append('caption', caption);
      formData.append('postImage', file);
      const response = await postsApi.createPost(formData);
      dispatch(createPost(response.newPost));
      actions.resetForm();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container style={{ paddingTop: 100 }}>
      <Row className={styles['no-gutter']}>
        <Col xs={12} lg={8}>
          <Row>
            <Col>
              <PostForm onSubmit={handleSubmitPostForm} />
            </Col>
          </Row>
          <Row>
            <Col>{isFetching ? <PostCardSkeleton /> : <PostList />}</Col>
          </Row>
        </Col>
        <Col lg={4} className="d-none d-lg-block">
          <Sider />
        </Col>
      </Row>
    </Container>
  );
}

export default NewfeedPage;
