import { Menu } from 'antd';
import EditProfileForm from 'features/Accounts/components/EditProfileForm';
import ChangeAvatarForm from 'features/Accounts/components/ChangeAvatarForm';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './style.module.scss';
const { SubMenu } = Menu;
EditProfile.propTypes = {};

function EditProfile(props) {
  const currentUser = useSelector(state => state.user.current);
  return (
    <div className={styles.wrapper}>
      <ChangeAvatarForm
        profilePictureUrl={currentUser.profilePictureUrl}
        size="medium"
        currentUser={currentUser}
      />
      <EditProfileForm currentUser={currentUser} />
    </div>
  );
}

export default EditProfile;
