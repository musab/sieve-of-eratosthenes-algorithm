import React from 'react';

export const NumberInput = ({ handleSubmit }) => {
  return (
    <>
      <p>Enter a number to find the median from a set of prime number(s)</p>
      <form onSubmit={handleSubmit} data-testid="form">
        <input type="number" min="1" defaultValue={1} />
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </>
  );
};
