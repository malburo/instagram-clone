import Footer from 'components/Footer';
import { checkCurrentUser } from 'features/Auth/AuthSlice';
import InfoCard from 'features/Profile/components/InfoCard';
import PostCardImageList from 'features/Profile/components/PostCardImageList';
import PostListSkeleton from 'features/Profile/components/PostListSkeleton';
import { setPosts } from 'features/Profile/ProfileSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Container, Row } from 'reactstrap';
import API from 'utils/API';
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
        const response = await API.call('get', `profile/${username}/posts`);
        setIsFetching(false);
        if (!response.checkParams) {
          history.push('/404');
          return;
        }
        dispatch(setPosts(response.profile));
        dispatch(checkCurrentUser(response.isCurrentUser));
      } catch (e) {
        setIsFetching(false);
        console.log('error:', e);
      }
    }
    fetchData();
  }, [dispatch, history, username]);
  return (
    <>
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
      </Container>
      <Footer />
    </>
  );
}

export default ProfilePage;
