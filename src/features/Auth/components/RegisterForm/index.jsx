import InputField from 'custom-field/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import styles from './style.module.scss';

const RegisterForm = props => {
  const initialValues = {
    fullname: '',
    username: '',
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .required('This field is required.')
      .min(2, 'Your fullname is too short'),
    username: Yup.string()
      .required('This field is required.')
      .min(6, 'Your username is too short'),
    email: Yup.string()
      .required('This field is required.')
      .min(6, 'Your email is too short'),
    password: Yup.string()
      .required('Require password')
      .min(6, 'Your password is too short'),
  });
  const { onSubmit } = props;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ isSubmitting }) => (
        <Form className={styles['register-form']}>
          <h1 className={styles.logo}>Malburo</h1>
          <FastField
            name="fullname"
            component={InputField}
            placeholder="Họ và tên"
          />
          <FastField
            name="username"
            component={InputField}
            placeholder="Tên người dùng"
          />
          <FastField
            name="email"
            type="email"
            component={InputField}
            placeholder="Email"
          />
          <FastField
            type="password"
            name="password"
            component={InputField}
            placeholder="Mật khẩu"
          />

          <FormGroup>
            <Button
              type="submit"
              color="primary"
              block
              className={styles.button}>
              {isSubmitting ? <Spinner size="sm" /> : 'Đăng ký'}
            </Button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
};
export default RegisterForm;
