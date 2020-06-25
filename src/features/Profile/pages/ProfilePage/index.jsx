import React from 'react';
import PropTypes from 'prop-types';
import PostCardImageList from 'features/Profile/components/PostCardImageList';
import { Container, Row, Col } from 'reactstrap';
import PostForm from 'features/Post/components/PostForm';
import Avatar from 'components/Avatar';
import styles from './style.module.scss';
import { SettingIcon } from 'components/Icon';
ProfilePage.propTypes = {};
ProfilePage.defaultProps = {
  avatarPictureUrl:
    'https://noidangsong.vn/files/uploads/fb1735058496563345/1526444239-tt_avatar_small.jpg',
};
function ProfilePage(props) {
  const { avatarPictureUrl, username } = props;
  return (
    <Container style={{ paddingTop: 100 }}>
      <Row>
        <Col className={styles.wrapper}>
          <div className={styles.avatar}>
            <Avatar img={avatarPictureUrl} username={username} />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>
              <p>Tong quoc bao</p>
            </div>
            <div className={styles.icon}>
              <SettingIcon />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <PostCardImageList />
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
