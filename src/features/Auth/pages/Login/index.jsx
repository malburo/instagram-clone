import authApi from 'api/authApi';
import { loginSuccess } from 'features/Auth/AuthSlice';
import LoginForm from 'features/Auth/components/LoginForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';
LoginPage.propTypes = {};

function LoginPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = async (user, actions) => {
    try {
      const response = await authApi.login(user);
      localStorage.setItem('jwtToken', response.accessToken);
      dispatch(loginSuccess(response.user));
      history.push('/');
    } catch (err) {
      const { errors } = err.response.data;
      actions.setErrors({ ...errors });
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
