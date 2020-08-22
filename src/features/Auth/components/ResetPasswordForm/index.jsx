import InputField from 'custom-field/InputField';
import { FastField, Formik, Form } from 'formik';
import React from 'react';
import { Button, FormGroup, Spinner, Alert } from 'reactstrap';
import * as Yup from 'yup';
import styles from './style.module.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ResetPasswordForm = props => {
  const initialValues = {
    email: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('This field is required.')
      .min(3, 'Your email is too short'),
  });
  const { onSubmit, isSuccess } = props;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ isSubmitting }) => (
        <Form className={styles['reset-form']}>
          <div className={styles['header-form']}>
            <img
              src="https://image.flaticon.com/icons/png/512/481/481195.png"
              className={styles['header-form__icon']}
              alt="lock_icon"
            />
            <p className={styles['header-form__title']}>
              Bạn đang gặp sự cố khi đăng nhập ?
            </p>

            <p className={styles['header-form__subtitle']}>
              Hãy nhập email của bạn và chúng tôi sẽ gửi cho bạn liên kết để
              truy cập lại vào tài khoản.
            </p>
          </div>
          {isSuccess ? (
            <Alert color="success">
              Liên kết đã được gửi đến email, vui lòng truy cập vào email !
            </Alert>
          ) : (
            <>
              <FastField
                name="email"
                component={InputField}
                placeholder="Email"
              />
              <FormGroup>
                <Button
                  type="submit"
                  color="primary"
                  block
                  className={styles.button}>
                  {isSubmitting ? <Spinner size="sm" /> : 'Gửi liên kết'}
                </Button>
              </FormGroup>
            </>
          )}

          <Link to="/auth/register" className={styles.register}>
            Tạo tài khoản mới
          </Link>
        </Form>
      )}
    </Formik>
  );
};
export default ResetPasswordForm;
