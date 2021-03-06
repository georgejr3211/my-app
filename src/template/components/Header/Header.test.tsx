import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('<Header />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = <Header />;
  });

  // 1. UI
  it('should render avatar image', async () => {
    // Arrange
    render(wrapper);
    // Act
    const avatar = await screen.findByLabelText('avatar');

    // Assert
    expect(avatar).toBeInTheDocument();
  });

  // 2. Functionalities
  it('should be able to display pop-up menu profile', async () => {
    // Arrange
    render(wrapper);

    // Act
    const avatar = await screen.findByLabelText('avatar');
    userEvent.click(avatar);
    const modalProfile = await screen.findByLabelText('modal-profile');

    // Assert
    expect(modalProfile).toBeInTheDocument();
  });
});
