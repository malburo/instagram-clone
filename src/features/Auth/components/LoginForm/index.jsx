import InputField from 'custom-field/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import styles from './style.module.scss';

const LoginForm = props => {
  const initialValues = {
    username: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('This field is required.')
      .min(3, 'Your username is too short'),
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
        <Form className={styles['login-form']}>
          <h1 className={styles.logo}>Malburo</h1>
          <FastField
            name="username"
            component={InputField}
            placeholder="Tên người dùng"
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
              {isSubmitting ? <Spinner size="sm" /> : 'Đăng nhập'}
            </Button>
          </FormGroup>
          <Link to="/auth/reset" className={styles.reset}>
            Quên mật khẩu?
          </Link>
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
