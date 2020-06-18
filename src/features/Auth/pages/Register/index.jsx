import React from 'react';
import styles from './style.module.scss';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import RegisterForm from 'features/Auth/components/RegisterForm';
RegisterPage.propTypes = {};

function RegisterPage(props) {
  const handleSubmit = values => {
    console.log(values);
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
