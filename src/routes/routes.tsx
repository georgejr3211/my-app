import Product from '@/pages/Product/Product';
import ProductForm from '@/pages/Product/ProductForm/ProductForm';
import Template from '@/template/Template';
import { Content } from 'antd/lib/layout/layout';
import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

export default function RouterTemplate() {
  const menus = [{ id: 1, title: 'Products', icon: null, path: '/products' }];

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Template menus={menus} />,
      children: [
        {
          path: '/products',
          children: [
            { index: true, element: <Product /> },
            { path: '/products/:id', element: <ProductForm /> },
          ],
        },
      ],
    },
  ];

  const element = useRoutes(routes);

  return <Content>{element}</Content>;
}
