import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Col, Row } from 'reactstrap';
import styles from './style.module.scss';

InfoCardSkeleton.propTypes = {};

function InfoCardSkeleton(props) {
  return (
    <Row>
      <Col md="4">
        <div className={styles.avatar}>
          <Skeleton circle={true} height={150} width={150} />
        </div>
      </Col>
      <Col md="8">
        <div className={styles.wrapper}>
          <Row>
            <Col>
              <div className={styles.info}></div>
            </Col>
          </Row>
          <Row>
            <Col className="d-none d-md-block">
              <div className={styles.body}>
                <div className={styles.des}></div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default InfoCardSkeleton;
