import InputField from 'custom-field/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import styles from './style.module.scss';

const ChangePasswordForm = props => {
  const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };
  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .required('Require password')
      .min(6, ' password is too short'),
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
        <Form className={styles['change-password-form']}>
          <div className={styles['change-password-form__item']}>
            <p>Mật khẩu cũ</p>
            <FastField
              type="password"
              name="currentPassword"
              component={InputField}
            />
          </div>
          <div className={styles['change-password-form__item']}>
            <p>Mật khẩu mới</p>
            <FastField
              type="password"
              name="newPassword"
              component={InputField}
            />
          </div>
          <div className={styles['change-password-form__item']}>
            <p>Xác nhận mật khẩu mới</p>
            <FastField
              type="password"
              name="confirmNewPassword"
              component={InputField}
            />
          </div>
          <FormGroup>
            <Button type="submit" color="primary" className={styles.button}>
              {isSubmitting ? <Spinner size="sm" /> : 'Thay đổi mật khẩu'}
            </Button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
};
export default ChangePasswordForm;
