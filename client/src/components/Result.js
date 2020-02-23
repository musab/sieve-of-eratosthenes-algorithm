import React from 'react';

export const Result = ({ data, error }) => (
  <div className="card">
    <code>{JSON.stringify(data)}</code>
    {error && <code>{JSON.stringify(error)}</code>}
  </div>
);
