import React, { useState, useEffect } from 'react';
import './App.css';

export const App = () => {
  const [userNumber, setUserNumber] = useState(0);
  const [median, setMedian] = useState({});
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://swapi.co/api/planets/${userNumber}/`);
      res
        .json()
        .then(res => setMedian(res))
        .catch(err => setErrors(err));
    }

    userNumber && fetchData();
  });

  const handleChange = event => {
    setUserNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userNumber);
  };

  return (
    <div className="App">
      <header>musa barighzaai // musa_b@icloud.com</header>
      <div className="App-body">
        <p>Enter a number to find the median from a set of prime number(s)</p>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={userNumber}
            type="number"
            min="0"
          />
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
        <div>
          <span>...computing...</span>
          <br />
          <progress></progress>
        </div>
        <div className="card">
          <h3>FOUND</h3>
          <code>{JSON.stringify(median)}</code>
          <code>{JSON.stringify(hasError)}</code>
        </div>
      </div>
    </div>
  );
};
