import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Container, Row } from 'reactstrap';
import styles from './style.module.scss';

EditAccountLayout.propTypes = {};

function EditAccountLayout({ children }) {
  const match = useRouteMatch();
  const handleClick = e => {
    console.log('click ', e);
  };
  return (
    <Container>
      <Row className={styles.wrapper}>
        <Col md={4}>
          <Menu
            onClick={handleClick}
            style={{ width: 256 }}
            selectedKeys={match.path}
            mode="inline">
            <Menu.ItemGroup key="g1">
              <Menu.Item key="/accounts/edit">
                <Link to="/accounts/edit">Edit Profile</Link>
              </Menu.Item>
              <Menu.Item key="/accounts/password/change">
                <Link to="/accounts/password/change">Change Password</Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </Col>
        <Col md={6} className={styles.body}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default EditAccountLayout;
