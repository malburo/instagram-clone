import InputField from 'custom-field/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import styles from './style.module.scss';

const EditProfileForm = props => {
  const { currentUser, onSubmit } = props;
  const { fullname, username, email } = currentUser;
  const initialValues = {
    fullname: fullname,
    username: username,
    email: email,
  };
  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .required('This field is required.')
      .min(3, 'Your name is too short'),
    username: Yup.string()
      .required('This field is required.')
      .min(3, 'Your username is too short'),
    email: Yup.string()
      .required('This field is required.')
      .min(3, 'Your email is too short'),
  });
  const handleSubmit = values => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      {({ isSubmitting }) => (
        <Form className={styles['edit-profile-form']}>
          <div className={styles['edit-profile-form__item']}>
            <p>Fullname</p>
            <FastField
              name="fullname"
              component={InputField}
              placeholder="fullname"
            />
          </div>
          <div className={styles['edit-profile-form__item']}>
            <p>username</p>
            <FastField
              name="username"
              component={InputField}
              placeholder="username"
            />
          </div>
          <div className={styles['edit-profile-form__item']}>
            <p>email</p>
            <FastField
              name="email"
              type="email"
              component={InputField}
              placeholder="email"
            />
          </div>
          <FormGroup>
            <Button type="submit" color="primary" className={styles.button}>
              {isSubmitting ? <Spinner size="sm" /> : 'Submit'}
            </Button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
};
export default EditProfileForm;
