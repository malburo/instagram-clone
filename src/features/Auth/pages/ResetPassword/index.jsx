import authApi from 'api/authApi';
import ResetPasswordForm from 'features/Auth/components/ResetPasswordForm';
import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';
ResetPasswordPage.propTypes = {};

function ResetPasswordPage(props) {
  const [isSuccess, setIsSucess] = useState(false);
  const handleSubmit = async (email, actions) => {
    try {
      await authApi.resetPassword(email);
      setIsSucess(true);
    } catch (err) {
      const { errors } = err.response.data;
      actions.setErrors({ ...errors });
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className={styles['reset-page']}>
            <ResetPasswordForm onSubmit={handleSubmit} isSuccess={isSuccess} />
            <div className={styles['reset-page__nav']}>
              <Link to="/auth/login">Quay lại đăng nhập </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ResetPasswordPage;
