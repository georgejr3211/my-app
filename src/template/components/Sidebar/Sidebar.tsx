import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './Sidebar.styles';

type Props = {
  values: any[];
};

export default function Sidebar({ values }: Props) {
  return (
    <S.Wrapper>
      <Link to="/" aria-label="brand-link">
        <S.Brand aria-label="brand" />
      </Link>

      <Menu theme="dark" mode="inline">
        {values &&
          values.map((value) => (
            <Menu.Item key={value.id}>
              <Link to={value.path}>{value.title}</Link>
            </Menu.Item>
          ))}
      </Menu>
    </S.Wrapper>
  );
}
