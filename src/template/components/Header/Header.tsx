import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';

import * as S from './Header.styles';

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
