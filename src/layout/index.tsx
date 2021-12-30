import React from 'react';
import { Outlet } from 'react-router-dom';

import * as S from './styles';

export default function Layout() {
  return (
    <S.Wrapper>
      Layout component
      <Outlet />
    </S.Wrapper>
  );
}
