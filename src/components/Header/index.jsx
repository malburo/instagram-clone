import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';
import Avatar from 'components/Avatar';
const Header = () => {
  return (
    <header
      className={`${styles.header} d-flex align-items-center justify-content-between`}>
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col className="col-auto">
            <h3>Malburo</h3>
          </Col>
          <Col className="col-auto">
            <input type="text" />
          </Col>
          <Col className="col-2">
            <div className="d-flex justify-content-between align-items-center">
              <Avatar img="" size="small" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
