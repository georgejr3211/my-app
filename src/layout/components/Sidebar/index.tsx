import { Menu, Typography } from 'antd';
import React from 'react';
import * as S from './styles';

type MenuProps = {
  id: number;
  title: string;
  path: string;
  icon: string;
};

type Props = {
  data: MenuProps[];
};

export default function Sidebar({ data }: Props) {
  return (
    <S.Wrapper>
      <Typography.Title aria-label="logo">Social</Typography.Title>
      <Menu mode="inline" theme="dark">
        {data && data.map((item) => <Menu.Item key={item.id}>{item.title}</Menu.Item>)}

        <Menu.Item key="logout">Log out</Menu.Item>
      </Menu>
    </S.Wrapper>
  );
}
