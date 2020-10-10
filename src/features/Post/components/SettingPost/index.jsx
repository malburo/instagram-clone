import { Dropdown, Menu } from 'antd';
import { DotIcon } from 'components/Icon';
import React from 'react';

SettingPost.propTypes = {};

function SettingPost() {
  const menu = (
    <Menu>
      <Menu.Item key="0">Delete</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
      <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <DotIcon />
      </div>
    </Dropdown>
  );
}

export default SettingPost;
