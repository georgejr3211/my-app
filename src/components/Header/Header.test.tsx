import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Header from './Header';

describe('<Header />', () => {
  let wrapper: any;
  const title = 'Products';

  beforeEach(() => {
    wrapper = <Header title={title} />;
  });

  // 1. UI
  it('should render title prop', () => {
    // Arrange
    render(wrapper);

    // Act
    const titleElement = screen.getByText(title);

    // Assert
    expect(titleElement).toBeInTheDocument();
  });

  it('should render add button', () => {
    // Arrange
    render(wrapper);

    // Act
    const addButton = screen.getByRole('button', { name: /adicionar/i });

    // Assert
    expect(addButton).toBeInTheDocument();
  });

  it('should render refresh button', () => {
    // Arrange
    render(wrapper);

    // Act
    const refreshButton = screen.getByRole('button', { name: /atualizar/i });

    // Assert
    expect(refreshButton).toBeInTheDocument();
  });

  it('should render dropdown', () => {
    // Arrange
    render(wrapper);

    // Act
    const select = screen.getByRole('combobox');

    // Assert
    expect(select).toBeInTheDocument();
  });

  // Functionalities
  it('should call onAdd method', () => {
    const onAdd = jest.fn();
    // Arrange
    render(<Header title="Products" onAdd={onAdd} />);

    // Act
    const addButton = screen.getByRole('button', { name: /adicionar/i });
    userEvent.click(addButton);

    // Assert
    expect(onAdd).toHaveBeenCalledTimes(1);
  });

  it('should call onRefresh method', () => {
    const onRefresh = jest.fn();
    // Arrange
    render(<Header title="Products" onRefresh={onRefresh} />);

    // Act
    const refreshButton = screen.getByRole('button', { name: /atualizar/i });
    userEvent.click(refreshButton);

    // Assert
    expect(onRefresh).toHaveBeenCalledTimes(1);
  });

  it('should call onRefresh method when dropdown select has been changed', async () => {
    // Arrange
    const onRefresh = jest.fn((params) => params);
    render(<Header title="Products" onRefresh={onRefresh} />);

    // Act
    const select = screen.getByRole('combobox');
    userEvent.click(select);

    const option = await screen.findAllByText('20');
    userEvent.click(option[1], undefined, { skipPointerEventsCheck: true });

    // Assert
    expect(onRefresh).toHaveBeenCalledTimes(1);
  });
});
