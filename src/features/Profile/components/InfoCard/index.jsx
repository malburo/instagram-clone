import Avatar from 'components/Avatar';
import { SettingIcon } from 'components/Icon';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './style.module.scss';
import SettingModal from '../SettingModal';
import ChangeAvatarForm from '../ChangeAvatarForm';
import Skeleton from 'react-loading-skeleton';

InfoCard.propTypes = {};

function InfoCard(props) {
  const profile = useSelector(state => state.profile);
  const isCurrentUser = useSelector(state => state.auth.isCurrentUser);
  const currentUser = useSelector(state => state.auth.user);
  const { profilePictureUrl, username, posts } = profile;
  return (
    <div className={styles.wrapper}>
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
      <div className={styles.body}>
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
        <div className={styles.des}>
          <span>{posts.length} bài viết</span>
          <span>0 người theo dõi</span>
          <span>Đang theo dõi 0 người dùng</span>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
