import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import styles from './style.module.scss';
Footer.propTypes = {};

function Footer(props) {
  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.footer}>
            <ul>
              <li>
                <p>GIỚI THIỆU</p>
              </li>
              <li>
                <p>TRỢ GIÚP</p>
              </li>
              <li>
                <p>BÁO CHÍ</p>
              </li>
              <li>
                <p>API</p>
              </li>
              <li>
                <p>VIỆC LÀM</p>
              </li>
              <li>
                <p>QUYỀN RIÊNG TƯ</p>
              </li>
              <li>
                <p>ĐIỀU KHOẢN</p>
              </li>
              <li>
                <p>VỊ TRÍ</p>
              </li>
              <li>
                <p>TÀI KHOẢN LIÊN QUAN NHẤT</p>
              </li>
              <li>
                <p>HASHTAG</p>
              </li>
              <li>
                <p>NGÔN NGỮ</p>
              </li>
            </ul>
            <div className={styles.malburo}>
              <p>© 2020 INSTAGRAM FROM MALBURO</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
