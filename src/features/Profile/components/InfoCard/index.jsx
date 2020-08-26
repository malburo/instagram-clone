import Avatar from 'components/Avatar';
import { SettingIcon } from 'components/Icon';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import ChangeAvatarForm from '../ChangeAvatarForm';
import SettingModal from '../SettingModal';
import styles from './style.module.scss';

InfoCard.propTypes = {};

function InfoCard(props) {
  const profile = useSelector(state => state.profile);
  const currentUser = useSelector(state => state.user.current);

  const { posts, profilePictureUrl, username, isCurrentUser } = profile;
  return (
    <Row>
      <Col md="4">
        <div className={styles.avatar}>
          {profilePictureUrl ? (
            isCurrentUser ? (
              <ChangeAvatarForm
                profilePictureUrl={currentUser.profilePictureUrl}
              />
            ) : (
              <Avatar img={profilePictureUrl} />
            )
          ) : (
            <Skeleton
              circle={true}
              height={150}
              width={150}
              style={{ marginTop: 24 }}
            />
          )}
        </div>
      </Col>
      <Col md="8">
        <div className={styles.wrapper}>
          <Row>
            <Col>
              <div className={styles.info}>
                <div className={styles.name}>
                  {username ? <p>{username}</p> : <Skeleton width={100} />}
                </div>
                <div className={styles.icon}>
                  {isCurrentUser && (
                    <SettingModal
                      icon={<SettingIcon />}
                      className={styles['setting-modal']}
                    />
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-none d-md-block">
              <div className={styles.body}>
                <div className={styles.des}>
                  <span>{posts.length} bài viết</span>
                  <span>0 người theo dõi</span>
                  <span>Đang theo dõi 0 người dùng</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default InfoCard;
