import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';
import Avatar from 'components/Avatar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

const Header = props => {
  const user = useSelector(state => state.auth.user);
  const { profilePictureUrl } = user;
  return (
    <header
      className={`${styles.header} d-flex align-items-center justify-content-between`}>
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col className="col-auto">
            <Link to="/" className={styles.logo}>
              <h3>Malburo</h3>
            </Link>
          </Col>
          <Col className={`${styles.search} col-auto`}>
            <input type="text" placeholder="Tìm kiếm..." />
          </Col>
          <Col className="col-2">
            <div className="d-flex justify-content-between align-items-center">
              <Link to={user.username}>
                <Avatar
                  img={profilePictureUrl}
                  size="small"
                  className={styles.avatar}
                />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
