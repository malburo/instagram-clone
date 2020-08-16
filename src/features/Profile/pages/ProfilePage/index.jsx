import profileApi from 'api/profileApi';
import Footer from 'components/Footer';
import InfoCard from 'features/Profile/components/InfoCard';
import PostCardImageList from 'features/Profile/components/PostCardImageList';
import PostListSkeleton from 'features/Profile/components/PostListSkeleton';
import { setPosts, setUser } from 'features/Profile/ProfileSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';

ProfilePage.propTypes = {};
function ProfilePage(props) {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { username } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        setIsFetching(true);
        const response = await profileApi.getPosts(username);
        setIsFetching(false);
        if (!response.checkParams) {
          history.push('/404');
          return;
        }
        dispatch(setPosts(response.profile));
        dispatch(setUser(response));
      } catch (e) {
        setIsFetching(false);
        console.log('error:', e);
      }
    }
    fetchData();
  }, [dispatch, history, username]);
  return (
    <Container style={{ paddingTop: 100 }}>
      <Row>
        <Col>
          <InfoCard />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <div className={styles.list}>
            {isFetching ? <PostListSkeleton /> : <PostCardImageList />}
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
