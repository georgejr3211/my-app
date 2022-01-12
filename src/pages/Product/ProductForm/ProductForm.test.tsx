import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ProductForm from './ProductForm';

describe('<ProductForm />', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = (
      <BrowserRouter>
        <ProductForm />
      </BrowserRouter>
    );
  });

  it('should render ProductForm component', async () => {
    render(wrapper);

    expect(1).toBe(1);
  });
});
