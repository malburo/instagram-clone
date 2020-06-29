import Avatar from 'components/Avatar';
import ChangeAvatarField from 'custom-field/ChangeAvatarField';
import { changeAvatar } from 'features/Auth/AuthSlice';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import API from 'utils/API';
import * as Yup from 'yup';
import styles from './style.module.scss';
ChangeAvatarForm.propTypes = {};

function ChangeAvatarForm(props) {
  const { profilePictureUrl } = props;
  const dispatch = useDispatch();
  const initialValues = {
    avatar: null,
  };
  const validationSchema = Yup.object().shape({
    avatar: Yup.mixed(),
  });
  const handleSubmit = async (newAvatar, actions) => {
    try {
      let formData = new FormData();
      formData.append('avatar', newAvatar.avatar);
      const response = await API.call('post', 'profile/avatar', formData);
      dispatch(changeAvatar(response.profilePictureUrl));
    } catch (e) {
      console.log('Tạo bài viết không thành công');
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
            <label
              htmlFor="avatar"
              className={`${styles.label} ${isSubmitting && styles.loading}`}>
              <Avatar img={profilePictureUrl} />
            </label>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ChangeAvatarForm;
