import Avatar from 'components/Avatar';
import { SettingIcon } from 'components/Icon';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './style.module.scss';
import SettingModal from '../SettingModal';

InfoCard.propTypes = {};

function InfoCard(props) {
  const profile = useSelector(state => state.profile);
  const { profilePictureUrl, username, posts } = profile;
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <Avatar img={profilePictureUrl} />
      </div>
      <div className={styles.body}>
        <div className={styles.info}>
          <div className={styles.name}>
            <p>{username}</p>
          </div>
          <div className={styles.icon}>
            <SettingModal
              icon={<SettingIcon />}
              className={styles['setting-modal']}
            />
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
