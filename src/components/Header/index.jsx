import DropdownAvatar from 'components/DropdownAvatar';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';

const Header = () => {
  const currentUser = useSelector(state => state.user.current);
  const { profilePictureUrl, username } = currentUser;
  return (
    <header className={styles.header}>
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col xs="auto">
            <Link to="/" className={styles.logo}>
              <h3>Malburo</h3>
            </Link>
          </Col>
          <Col xs="auto" className="d-none d-md-block">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className={styles.search}
            />
          </Col>
          <Col xs="auto">
            {profilePictureUrl ? (
              <DropdownAvatar
                profilePictureUrl={profilePictureUrl}
                username={username}
              />
            ) : (
              <Skeleton circle={true} height={32} width={32} />
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
