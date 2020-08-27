import { unwrapResult } from '@reduxjs/toolkit';
import { getMe, login } from 'app/userSlice';
import LoginForm from 'features/Auth/components/LoginForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';
LoginPage.propTypes = {};

function LoginPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      const payload = {
        ...values,
      };
      const loginResult = await dispatch(login(payload));
      if (!login.fulfilled.match(loginResult)) {
        actions.setErrors({ ...loginResult.payload.data });
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
          <div className={styles['login-page']}>
            <LoginForm onSubmit={handleSubmit} />
            <div className={styles['login-page__nav']}>
              <span>Bạn không có tài khoản? </span>
              <Link to="/auth/register">Đăng ký</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
