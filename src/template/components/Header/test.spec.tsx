import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '.';

describe('<Header />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = <Header />;
  });

  // 1. UI
  it('should render avatar image', () => {
    // Arrange
    render(wrapper);
    // Act
    const avatar = screen.getByLabelText('avatar');

    // Assert
    expect(avatar).toBeInTheDocument();
  });

  // 2. Functionalities
  it('should be able to display pop-up menu profile', () => {
    // Arrange
    render(wrapper);

    // Act
    const avatar = screen.getByLabelText('avatar');
    userEvent.click(avatar);
    const modalProfile = screen.getByLabelText('modal-profile');

    // Assert
    expect(modalProfile).toBeInTheDocument();
  });
});
