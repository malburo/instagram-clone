import Avatar from 'components/Avatar';
import { SettingIcon } from 'components/Icon';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './style.module.scss';

InfoCard.propTypes = {};

function InfoCard(props) {
  const profile = useSelector(state => state.profile);
  const { profilePictureUrl, username } = profile;
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <Avatar img={profilePictureUrl} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          <p>{username}</p>
        </div>
        <div className={styles.icon}>
          <SettingIcon />
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
