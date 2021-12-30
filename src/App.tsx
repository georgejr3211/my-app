import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RouterOutlet from './routes';
import { RootState } from './store';
import { decrement, increment } from './store/StockSlice';

function App(): any {
  const count = useSelector((state: RootState) => state.stock.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      {count}
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <RouterOutlet />
    </div>
  );
}

export default App;
