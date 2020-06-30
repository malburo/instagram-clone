import Footer from 'components/Footer';
import { setPosts } from 'features/Profile/ProfileSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Container, Row } from 'reactstrap';
import API from 'utils/API';
import styles from './style.module.scss';
import { checkCurrentUser } from 'features/Auth/AuthSlice';
const PostCardImageList = React.lazy(() =>
  import('features/Profile/components/PostCardImageList')
);
const InfoCard = React.lazy(() =>
  import('features/Profile/components/InfoCard')
);
ProfilePage.propTypes = {};
function ProfilePage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { username } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.call('get', `profile/${username}/posts`);
        if (!response.checkParams) {
          history.push('/404');
          return;
        }
        dispatch(setPosts(response.profile));
        dispatch(checkCurrentUser(response.isCurrentUser));
      } catch (e) {
        console.log('error:', e);
      }
    }
    fetchData();
  });
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
              <PostCardImageList />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ProfilePage;
