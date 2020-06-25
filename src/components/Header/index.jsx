import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';
import Avatar from 'components/Avatar';

const Header = props => {
  const { avatarPictureUrl } = props;
  return (
    <header
      className={`${styles.header} d-flex align-items-center justify-content-between`}>
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col className="col-auto">
            <h3>Malburo</h3>
          </Col>
          <Col className={`${styles.search} col-auto`}>
            <input type="text" placeholder="Tìm kiếm..." />
          </Col>
          <Col className="col-2">
            <div className="d-flex justify-content-between align-items-center">
              <Avatar
                img={
                  'https://noidangsong.vn/files/uploads/fb1735058496563345/1526444239-tt_avatar_small.jpg'
                }
                size="small"
                className={styles.avatar}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
