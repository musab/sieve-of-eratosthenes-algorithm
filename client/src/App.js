import React, { useState } from 'react';
import './App.css';
import useFetch from 'react-fetch-hook';

export const App = () => {
  const [userNumber, setUserNumber] = useState(0);
  const { isLoading, data, error } = useFetch(`/median-prime/${userNumber}/`, {
    depends: [userNumber]
  });

  const handleSubmit = event => {
    event.preventDefault();
    setUserNumber(event.target[0].value);
  };

  return (
    <div className="App">
      <header>musa barighzaai // musa_b@icloud.com</header>
      <div className="App-body">
        <p>Enter a number to find the median from a set of prime number(s)</p>
        <form onSubmit={handleSubmit}>
          <input type="number" min="0" />
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
        {isLoading && (
          <div>
            <span>...computing...</span>
            <br />
            <progress></progress>
          </div>
        )}
        <div className="card">
          <h3>FOUND</h3>
          <code>{JSON.stringify(data)}</code>
          {error && <code>{JSON.stringify(error)}</code>}
        </div>
      </div>
    </div>
  );
};
