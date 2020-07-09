import React from 'react';
import styles from './style.module.scss';
import { Container, Row, Col } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import RegisterForm from 'features/Auth/components/RegisterForm';
import API from 'utils/API';
RegisterPage.propTypes = {};

function RegisterPage(props) {
  const history = useHistory();
  const handleSubmit = async (user, actions) => {
    try {
      await API.call('post', 'auth/register', user);
      actions.setStatus({ isSuccess: true, message: 'Register success !' });
      actions.resetForm();
      history.push('/auth/login');
    } catch (e) {
      actions.setErrors({ ...e.response.data });
      actions.setStatus({ isSuccess: false, message: 'Register failed !' });
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
