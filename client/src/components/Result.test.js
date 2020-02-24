import React from 'react';
import { render, screen } from '@testing-library/react';
import { Result } from './Result';

test('shows not found when no data is passed', () => {
  const testMessage = 'no result found';
  render(<Result />);

  expect(screen.queryByText(testMessage)).toBeInTheDocument();
});

test('shows result when data is passed', () => {
  const data = { median: [3, 5] };
  const expected = '→ [3,5]';

  render(<Result data={data} />);
  expect(screen.getByText(expected)).toBeInTheDocument();
});

test('shows result when data is passed', () => {
  const error = { statusText: 'err' };
  const expected = '"err"';

  render(<Result error={error} />);
  expect(screen.getByText(expected)).toBeInTheDocument();
});
