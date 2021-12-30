import Layout from '@/layout';
import Product from '@/pages/Product';
import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

export default function RouterOutlet() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [{ index: true, element: <Product /> }],
    },
  ];

  const element = useRoutes(routes);

  return <div>{element}</div>;
}
