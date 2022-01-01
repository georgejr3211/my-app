import { UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import React from 'react';

import * as S from './Header.styles';

export default function Header() {
  const menu = () => (
    <Menu aria-label="modal-profile">
      <Menu.Item key="settings">Settings</Menu.Item>
    </Menu>
  );

  return (
    <S.Wrapper>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button aria-label="avatar" shape="circle" icon={<UserOutlined />} />
      </Dropdown>
    </S.Wrapper>
  );
}
