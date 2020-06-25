import Avatar from 'components/Avatar';
import { SettingIcon } from 'components/Icon';
import PostCardImageList from 'features/Profile/components/PostCardImageList';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';
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
          <div className={styles.list}>
            <PostCardImageList />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
