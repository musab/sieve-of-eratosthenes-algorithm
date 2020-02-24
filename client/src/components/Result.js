import React from 'react';
import { LoaderBar } from './LoaderBar';

export const Result = ({ data, error, isLoading }) => {
  const resultText = () => {
    if (isLoading) {
      return <LoaderBar />;
    }

    if (data && data.median) {
      return (
        <div>
          <span>result found</span>
          <br></br>
          <span>&rarr; {JSON.stringify(data.median)}</span>
        </div>
      );
    }

    if (error) {
      return <code>{JSON.stringify(error.statusText)}</code>;
    } else {
      return <p>no result found</p>;
    }
  };

  return (
    <div className="card">
      <div>{resultText()}</div>
    </div>
  );
};
