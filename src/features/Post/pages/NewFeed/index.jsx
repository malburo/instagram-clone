import { unwrapResult } from '@reduxjs/toolkit';
import Sider from 'components/Sider';
import PostCardSkeleton from 'features/Post/components/PostCardSkeleton';
import PostForm from 'features/Post/components/PostForm';
import PostList from 'features/Post/components/PostList';
import {
  createPost,
  getPostByLimit,
  getPostScroll,
} from 'features/Post/PostSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import styles from './style.module.scss';

NewfeedPage.propTypes = {};

function NewfeedPage(props) {
  const posts = useSelector(state => state.posts);
  const [filters, setFilters] = useState(() => {
    return {
      limit: 3,
      skip: 3,
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPostList() {
      try {
        const postsResult = await dispatch(
          getPostByLimit({ limit: 3, skip: 0 })
        );
        unwrapResult(postsResult);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPostList();
  }, [dispatch]);

  const fetchMoreData = async () => {
    setFilters(prevState => {
      return {
        ...filters,
        skip: prevState.skip + prevState.limit,
      };
    });
    const postsResult = await dispatch(getPostScroll(filters));
    unwrapResult(postsResult);
  };
  const handleSubmitPostForm = async (values, actions) => {
    try {
      const { caption, file } = values;
      let formData = new FormData();
      for (let i = 0; i < file.length; i++) {
        formData.append('files', file[i].originFileObj);
      }
      formData.append('caption', caption);
      const newPostResult = await dispatch(createPost(formData));
      unwrapResult(newPostResult);
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
            <Col>
              {posts.postList.length === 0 ? (
                <PostCardSkeleton />
              ) : (
                <PostList fetchMoreData={fetchMoreData} posts={posts} />
              )}
            </Col>
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
