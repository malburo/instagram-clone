import InputField from 'custom-field/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import styles from './style.module.scss';

const NewPasswordForm = props => {
  const initialValues = {
    newPassword: '',
    confirmNewPassword: '',
  };
  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required('Require password')
      .min(6, 'new password is too short'),
    confirmNewPassword: Yup.string()
      .required('Require password')
      .test('passwords-match', 'Password must match', function (value) {
        return this.parent.newPassword === value;
      }),
  });
  const { onSubmit } = props;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ isSubmitting }) => (
        <Form className={styles['new-password-form']}>
          <h3 className={styles.logo}>Reset Password</h3>
          <FastField
            type="password"
            name="newPassword"
            component={InputField}
            placeholder="Mật khẩu mới"
          />
          <FastField
            type="password"
            name="confirmNewPassword"
            component={InputField}
            placeholder="Xác thực mật khẩu mới"
          />
          <FormGroup>
            <Button
              type="submit"
              color="primary"
              block
              className={styles.button}>
              {isSubmitting ? <Spinner size="sm" /> : 'Thay đổi mật khẩu'}
            </Button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
};
export default NewPasswordForm;
