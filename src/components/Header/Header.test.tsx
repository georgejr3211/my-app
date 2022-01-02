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

  it('should render show rows dropdown', () => {
    // Arrange
    render(wrapper);

    // Act
    const showDropdownSelect = screen.getByLabelText('show-limit-rows');

    // Assert
    expect(showDropdownSelect).toBeInTheDocument();
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

  it('should call onRefresh method when dropdown select has been changed', () => {
    // Arrange
    const onRefresh = jest.fn((params) => params);
    render(<Header title="Products" onRefresh={onRefresh} />);

    // Act
    const rowOptions = screen.getByLabelText('show-limit-rows');
    userEvent.selectOptions(rowOptions, [screen.getAllByLabelText('row-option')[1]]);

    // Assert
    expect(onRefresh).toHaveBeenCalledTimes(1);
    expect(onRefresh.mock.results[0].value).toEqual({ limit: 20 });
  });
});
