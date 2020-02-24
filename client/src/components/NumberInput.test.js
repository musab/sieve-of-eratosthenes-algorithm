import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NumberInput } from './NumberInput';

test('number input submits', () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<NumberInput handleSubmit={onSubmit} />);
  fireEvent.submit(getByTestId('form'));
  expect(onSubmit).toHaveBeenCalled();
});
