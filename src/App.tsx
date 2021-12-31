import '@/styles/antd.css';

import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RouterOutlet from './routes';
import { RootState } from './store';
import { decrement, increment } from './store/StockSlice';

function App(): any {
  const count = useSelector((state: RootState) => state.stock.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Button type="primary" onClick={() => dispatch(increment())}>
        Increment
      </Button>
      {count}
      <Button type="primary" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
      <RouterOutlet />
    </>
  );
}

export default App;
