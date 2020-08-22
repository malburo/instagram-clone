import profileApi from 'api/profileApi';
import Avatar from 'components/Avatar';
import ChangeAvatarField from 'custom-field/ChangeAvatarField';
import { changeAvatar } from 'features/Auth/AuthSlice';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import styles from './style.module.scss';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
ChangeAvatarForm.propTypes = {};

function ChangeAvatarForm(props) {
  const { profilePictureUrl } = props;
  const dispatch = useDispatch();
  const { username } = useParams();
  const initialValues = {
    avatar: null,
  };
  const validationSchema = Yup.object().shape({
    avatar: Yup.mixed(),
  });
  const handleSubmit = async (data, actions) => {
    try {
      const { avatar } = data;
      let formData = new FormData();
      formData.append('avatar', avatar);
      const response = await profileApi.changeAvatar(username, formData);
      dispatch(changeAvatar(response.profilePictureUrl));
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
