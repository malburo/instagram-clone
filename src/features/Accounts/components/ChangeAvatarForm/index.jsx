import { unwrapResult } from '@reduxjs/toolkit';
import { changeAvatar } from 'app/userSlice';
import Avatar from 'components/Avatar';
import ChangeAvatarField from 'custom-field/ChangeAvatarField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from 'yup';
import styles from './style.module.scss';
ChangeAvatarForm.propTypes = {};

function ChangeAvatarForm(props) {
  const { profilePictureUrl, size, currentUser } = props;
  const dispatch = useDispatch();
  const { username } = useParams();
  const initialValues = {
    avatar: null,
  };
  const validationSchema = Yup.object().shape({
    avatar: Yup.mixed(),
  });
  const handleSubmit = async (values, actions) => {
    try {
      const { avatar } = values;
      let formData = new FormData();
      formData.append('avatar', avatar);

      const payload = {
        username,
        formData,
      };
      const avatarResult = await dispatch(changeAvatar(payload));
      unwrapResult(avatarResult);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      {formik => {
        const { isSubmitting } = formik;
        return (
          <Form>
            <FastField
              type="file"
              name="avatar"
              component={ChangeAvatarField}
            />
            <div className={currentUser ? styles.item : ''}>
              <label
                htmlFor="avatar"
                className={`${styles.label} ${isSubmitting && styles.loading}`}>
                <Avatar img={profilePictureUrl} size={size} />
              </label>
              {currentUser && (
                <div className={styles.itemRight}>
                  <p className={styles.username}>{currentUser.username}</p>
                  <label htmlFor="avatar">
                    <p className={styles.text}>Change Profile Photo</p>
                  </label>
                </div>
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ChangeAvatarForm;
