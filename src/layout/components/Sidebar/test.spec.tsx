import { render, screen } from '@testing-library/react';
import React from 'react';
import Sidebar from '.';

const data = [
  { id: 1, title: 'Dashboard', icon: 'any_icon', path: '/' },
  { id: 2, title: 'Products', icon: 'any_icon', path: '/products' },
];

describe('<Sidebar />', () => {
  it('should have logo element', async () => {
    render(<Sidebar data={data} />);

    const logoElement = await screen.findByLabelText('logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('should render menu items', async () => {
    render(<Sidebar data={data} />);

    const dashboardMenuElement = await screen.findByText(data[0].title);
    const productMenuElement = await screen.findByText(data[1].title);

    expect(dashboardMenuElement).toBeInTheDocument();
    expect(productMenuElement).toBeInTheDocument();
  });

  it('should render logout item', async () => {
    render(<Sidebar data={data} />);
    const logoutElement = await screen.findByText(/log out/i);

    expect(logoutElement).toBeInTheDocument();
  });
});
