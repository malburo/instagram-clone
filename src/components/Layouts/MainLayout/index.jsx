import React from 'react';
import Header from 'components/Header';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import styles from './style.module.scss';
import Footer from 'components/Footer';
MainLayout.propTypes = {};

function MainLayout(props) {
  return (
    <div className={styles['main-layout']}>
      <Header />
      <Container>
        <Row>
          <Col className={styles['main-layout__body']}>{props.children}</Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default MainLayout;
