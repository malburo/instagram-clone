import Header from 'components/Header';
import React from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import styles from './style.module.scss';
NewFeedLayout.propTypes = {};

function NewFeedLayout(props) {
  return (
    <div className={styles['main-layout']}>
      <Header />
      <Container>
        <Row>
          <Col>{props.children}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewFeedLayout;
