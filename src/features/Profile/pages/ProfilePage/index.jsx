import InfoCard from 'features/Profile/components/InfoCard';
import InfoCardSkeleton from 'features/Profile/components/InfoCardSkeleton';
import PostCardImageList from 'features/Profile/components/PostCardImageList';
import PostListSkeleton from 'features/Profile/components/PostListSkeleton';
import { getProfile } from 'features/Profile/ProfileSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Row } from 'reactstrap';
import styles from './style.module.scss';

ProfilePage.propTypes = {};
function ProfilePage(props) {
  const [isFetching, setIsFetching] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const { username } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsFetching(true);
        const payload = {
          username,
        };
        const profileResult = await dispatch(getProfile(payload));
        if (!getProfile.fulfilled.match(profileResult)) {
          if (!profileResult.payload.data.checkUsernameParams) {
            history.push('/404');
            return;
          }
        }
        setIsFetching(false);
      } catch (e) {
        setIsFetching(false);
        console.log(e);
      }
    }
    fetchData();
  }, [dispatch, history, username]);
  return (
    <div style={{ paddingTop: 100 }} className={styles.wrapper}>
      <Row>
        <Col>{isFetching ? <InfoCardSkeleton /> : <InfoCard />}</Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <div className={styles.list}>
            {isFetching ? <PostListSkeleton /> : <PostCardImageList />}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProfilePage;
