import Avatar from 'antd/lib/avatar/avatar';
import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';

import * as S from './styles';
import { Button } from 'antd';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <Button aria-label="avatar" shape="circle" onClick={() => setIsOpen(true)} icon={<UserOutlined />} />
      {isOpen && (
        <ul aria-label="modal-profile">
          <li>Settings</li>
        </ul>
      )}
    </S.Wrapper>
  );
}
