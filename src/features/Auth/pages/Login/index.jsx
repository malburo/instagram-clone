import LoginForm from 'features/Auth/components/LoginForm';
import React from 'react';
import styles from './style.module.scss';
import { Container, Row, Col } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { loginSuccess } from 'features/Auth/AuthSlice';
import { useDispatch } from 'react-redux';
import API from 'utils/API';
LoginPage.propTypes = {};

function LoginPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = async (currentUser, actions) => {
    try {
      const response = await API.call('post', 'auth/login', currentUser);
      localStorage.setItem('jwtToken', response.accessToken);
      API.setToken(response.accessToken);
      dispatch(loginSuccess(response.user));
      history.push('/');
    } catch (e) {
      actions.setErrors({ ...e.response.data });
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
