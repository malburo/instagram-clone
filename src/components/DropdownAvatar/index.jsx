import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import store from 'app/store';
import { logout } from 'app/userSlice';
import Avatar from 'components/Avatar';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './style.module.scss';
DropdownAvatar.propTypes = {
  profilePictureUrl: PropTypes.string.isRequired,
};

function DropdownAvatar({ profilePictureUrl, username }) {
  const history = useHistory();
  const handleLogout = () => {
    store.dispatch(logout());
    history.push('/auth/login');
  };
  const menu = (
    <Menu className={styles.menu}>
      <Menu.Item key="0" icon={<UserOutlined />}>
        <Link to={`/${username}`}>Profile</Link>
      </Menu.Item>
      <Menu.Item key="1" icon={<SettingOutlined />}>
        <Link to="/accounts/edit">Setting</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown
      overlay={menu}
      trigger={['click']}
      placement="bottomRight"
      getPopupContainer={trigger => trigger.parentNode}>
      <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <Avatar img={profilePictureUrl} size="small" />
      </div>
    </Dropdown>
  );
}

export default DropdownAvatar;
