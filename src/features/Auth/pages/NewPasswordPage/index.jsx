import authApi from 'api/authApi';
import NewPasswordForm from 'features/Auth/components/NewPasswordForm';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Container, Row, Toast, ToastBody, ToastHeader } from 'reactstrap';
import styles from './style.module.scss';
VerifyTokenPage.propTypes = {};

function VerifyTokenPage(props) {
  const { token } = useParams();
  const [isValidToken, setIsValidToken] = useState(true);
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      try {
        await authApi.verifyMailResetPassword(token);
      } catch (err) {
        console.log(err);
        setIsValidToken(false);
      }
    }
    fetchData();
  }, [token]);

  const handleSubmit = async (newPassword, actions) => {
    try {
      await authApi.newPassword(token, newPassword);
      history.push('/auth/login');
    } catch (err) {
      console.log(err);
      setIsValidToken(false);
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className={styles['reset-page']}>
            {isValidToken ? (
              <NewPasswordForm onSubmit={handleSubmit} />
            ) : (
              <>
                <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                  <Toast>
                    <ToastHeader>Notification</ToastHeader>
                    <ToastBody>
                      <span>Token hết hạn sử dụng </span>
                      <Link to="/auth/login">Quay lại đăng nhập!</Link>
                    </ToastBody>
                  </Toast>
                </div>
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default VerifyTokenPage;
