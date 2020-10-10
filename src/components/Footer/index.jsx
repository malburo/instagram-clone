import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
Footer.propTypes = {};

function Footer(props) {
  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.footer}>
            <ul>
              <li>
                <Link>GIỚI THIỆU</Link>
              </li>
              <li>
                <Link>TRỢ GIÚP</Link>
              </li>
              <li>
                <Link>BÁO CHÍ</Link>
              </li>
              <li>
                <Link>API</Link>
              </li>
              <li>
                <Link>VIỆC LÀM</Link>
              </li>
              <li>
                <Link>QUYỀN RIÊNG TƯ</Link>
              </li>
              <li>
                <Link>ĐIỀU KHOẢN</Link>
              </li>
              <li>
                <Link>VỊ TRÍ</Link>
              </li>
              <li>
                <Link>TÀI KHOẢN LIÊN QUAN NHẤT</Link>
              </li>
              <li>
                <Link>HASHTAG</Link>
              </li>
              <li>
                <Link>NGÔN NGỮ</Link>
              </li>
            </ul>
            <div className={styles.malburo}>
              <p>© 2020 INSTAGRAM CLONE FROM MALBURO</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
