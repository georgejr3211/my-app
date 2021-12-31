import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from '.';

describe('<Sidebar />', () => {
  const values = [
    { id: 1, title: 'Dashboard', icon: '', path: '/dashboard' },
    { id: 2, title: 'Customers', icon: '', path: '/customers' },
  ];

  let wrapper: any;
  beforeEach(() => {
    wrapper = (
      <BrowserRouter>
        <Sidebar values={values} />
      </BrowserRouter>
    );
  });

  // 1. UI
  test('should render brand image', async () => {
    // Arrange
    render(wrapper);

    // Act
    const brand = await screen.findByLabelText('brand');

    // Assert
    expect(brand).toBeInTheDocument();
  });

  test('should render menu list', async () => {
    // Arrange
    render(wrapper);

    // Act
    const dashboard = await screen.findByText(values[0].title);
    const product = await screen.findByText(values[1].title);

    // Assert
    expect(dashboard).toBeInTheDocument();
    expect(product).toBeInTheDocument();
  });

  // 2. Functionalities
  test('should be able to go to main page through brand element', async () => {
    // Arrange
    render(wrapper);

    // Act
    const brand = await screen.findByLabelText('brand-link');

    // Assert
    expect(brand).toHaveAttribute('href', '/');
  });

  test('should be a link that have href value to "/dashboard"', async () => {
    // Arrange
    render(wrapper);

    // Act
    const dashboard = await screen.findByRole('link', { name: values[0].title });

    // Assert
    expect(dashboard).toHaveAttribute('href', '/dashboard');
  });
});
