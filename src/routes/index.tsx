import Product from '@/pages/Product';
import Template from '@/template';
import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import * as S from './styles';

export default function RouterTemplate() {
  const menus = [{ id: 1, title: 'Products', icon: null, path: '/products' }];

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Template menus={menus} />,
      children: [{ path: '/products', element: <Product /> }],
    },
  ];

  const element = useRoutes(routes);

  return <S.Wrapper>{element}</S.Wrapper>;
}
