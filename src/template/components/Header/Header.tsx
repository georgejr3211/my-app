import { Dropdown, Menu } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
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
        <S.AvatarWrapper size={38} aria-label="avatar" shape="circle" src="https://joeschmoe.io/api/v1/random" />
      </Dropdown>
    </S.Wrapper>
  );
}
