import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Enter a number to find the median/i);
  expect(linkElement).toBeInTheDocument();
});
