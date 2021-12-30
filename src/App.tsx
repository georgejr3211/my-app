import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { decrement, increment } from './store/StockSlice';

function App(): any {
  const count = useSelector((state: RootState) => state.stock.counter);
  const dispatch = useDispatch();

  return (
    <>
      <button type="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      {count}
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </>
  );
}

export default App;
