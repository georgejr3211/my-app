import Layout, { Content, Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import * as S from './Template.styles';

type Props = {
  menus: any[];
};

export default function Template({ menus }: Props) {
  return (
    <S.Wrapper>
      <Sidebar values={menus} />
      <Layout>
        <Header />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </S.Wrapper>
  );
}
