import { unwrapResult } from '@reduxjs/toolkit';
import { getMe, register } from 'app/userSlice';
import RegisterForm from 'features/Auth/components/RegisterForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';
RegisterPage.propTypes = {};

function RegisterPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      const payload = {
        ...values,
      };
      const registerResult = await dispatch(register(payload));
      // handle action register custom error
      if (!register.fulfilled.match(registerResult)) {
        actions.setErrors({ ...registerResult.payload.data.errors });
      }

      const getMeResult = await dispatch(getMe());
      unwrapResult(getMeResult);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className={styles['register-page']}>
            <RegisterForm onSubmit={handleSubmit} />
            <div className={styles['register-page__nav']}>
              <span>Bạn đã có tài khoản? </span>
              <Link to="/auth/login">Đăng nhập</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
