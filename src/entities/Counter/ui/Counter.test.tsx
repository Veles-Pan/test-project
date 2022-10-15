import { fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { Counter } from './Counter';

describe('Sidebar', () => {
  test('test render', () => {
    renderComponent(<Counter />);
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  test('test value render', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 100 } } });
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    expect(screen.getByTestId('counter-value')).toHaveTextContent('100');
  });

  test('test increment', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 100 } } });
    const plusButton = screen.getByTestId('counter-plus-button');
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    fireEvent.click(plusButton);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('101');
  });

  test('test decrement', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 100 } } });
    const minusButton = screen.getByTestId('counter-minus-button');
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    fireEvent.click(minusButton);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('99');
  });
});
