import LoginForm from 'features/Auth/components/LoginForm';
import React from 'react';
import styles from './style.module.scss';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
LoginPage.propTypes = {};

function LoginPage(props) {
  const handleSubmit = values => {
    console.log(values);
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
