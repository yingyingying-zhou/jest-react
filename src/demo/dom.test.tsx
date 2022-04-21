import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react';
import CounterApp from './dom';

// afterEach(cleanup);
test('should to 0', () => {
  const { getByTestId } = render(<CounterApp />)
  expect(getByTestId('counter')).toBeInTheDocument();
  expect(getByTestId('counter')).toHaveTextContent('0')
  fireEvent.click(getByTestId('button-up'));
  expect(getByTestId('counter')).toHaveTextContent('1')
  fireEvent.click(getByTestId('button-down'));
  // expect(getByTestId('counter')).toHaveTextContent('0')
})