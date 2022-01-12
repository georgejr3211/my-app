import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Product from './Product';

describe('<Product />', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = (
      <Router>
        <Product />
      </Router>
    );
  });

  it('should render Header component', async () => {
    render(wrapper);

    const header = await screen.findByText('Products');

    expect(header).toBeInTheDocument();
  });

  it('should render Table component', async () => {
    render(wrapper);

    const table = await screen.findByTestId('Table');

    expect(table).toBeInTheDocument();
  });
});
