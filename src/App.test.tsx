import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

let wrapper: any = null;
beforeEach(() => {
  wrapper = (
    <Provider store={store}>
      <App />
    </Provider>
  );
});

test('should render App component', () => {
  const { container } = render(wrapper);
  expect(container).not.toBe(null);
});
