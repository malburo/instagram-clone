import ChangeAvatarForm from 'features/Accounts/components/ChangeAvatarForm';
import EditProfileForm from 'features/Accounts/components/EditProfileForm';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style.module.scss';
import { unwrapResult } from '@reduxjs/toolkit';
import { editProfile } from 'app/userSlice';
EditProfile.propTypes = {};

function EditProfile(props) {
  const currentUser = useSelector(state => state.user.current);
  const dispatch = useDispatch();
  const handleSubmit = async (values, action) => {
    try {
      const updateResult = await dispatch(editProfile(values));
      unwrapResult(updateResult);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.wrapper}>
      <ChangeAvatarForm
        profilePictureUrl={currentUser.profilePictureUrl}
        size="medium"
        currentUser={currentUser}
      />
      <EditProfileForm currentUser={currentUser} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditProfile;
