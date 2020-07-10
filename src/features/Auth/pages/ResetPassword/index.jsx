import ResetPasswordForm from 'features/Auth/components/ResetPasswordForm';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';
ResetPasswordPage.propTypes = {};

function ResetPasswordPage(props) {
  const handleSubmit = values => {
    console.log(values);
  };
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className={styles['reset-page']}>
            <ResetPasswordForm onSubmit={handleSubmit} />
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
