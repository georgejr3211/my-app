import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RouterOutlet from './routes';

import { RootState } from './store';

function App(): any {
  const count = useSelector((state: RootState) => state.stock.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <RouterOutlet />
    </div>
  );
}

export default App;
