import '@/styles/antd.css';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RouterTemplate from './routes';
import { RootState } from './store';

function App(): any {
  const count = useSelector((state: RootState) => state.stock.counter);
  const dispatch = useDispatch();

  return <RouterTemplate />;
}

export default App;
