import profileApi from 'api/profileApi';
import Footer from 'components/Footer';
import InfoCard from 'features/Profile/components/InfoCard';
import PostCardImageList from 'features/Profile/components/PostCardImageList';
import PostListSkeleton from 'features/Profile/components/PostListSkeleton';
import { setProfile, checkCurrentUser } from 'features/Profile/ProfileSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const currentUser = useSelector(state => state.auth.user);
  const { username } = useParams();

  useEffect(() => {
    const isCurrentUser = currentUser.username === username;
    dispatch(checkCurrentUser(isCurrentUser));
  }, [dispatch, currentUser, username]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsFetching(true);
        const response = await profileApi.getProfile(username);
        setIsFetching(false);
        dispatch(setProfile(response.profile));
      } catch (e) {
        setIsFetching(false);
        if (!e.response.data.checkUsernameParams) {
          history.push('/404');
          return;
        }
        console.log(e);
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
