import { unwrapResult } from '@reduxjs/toolkit';
import InfoCard from 'features/Profile/components/InfoCard';
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
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { username } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const payload = {
          username,
        };
        setIsFetching(true);
        const profileResult = await dispatch(getProfile(payload));
        unwrapResult(profileResult);
        setIsFetching(false);
      } catch (e) {
        setIsFetching(false);
        console.log(e);
        if (!e.response.data.checkUsernameParams) {
          history.push('/404');
          return;
        }
      }
    }
    fetchData();
  }, [dispatch, history, username]);
  return (
    <div style={{ paddingTop: 100 }} className={styles.wrapper}>
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
    </div>
  );
}

export default ProfilePage;
