import React, { useState } from 'react';
import './App.css';
import { NumberInput } from './components/NumberInput';
import { LoaderBar } from './components/LoaderBar';
import { Result } from './components/Result';
import useFetch from 'react-fetch-hook';

const apiPath = `/median-prime`;

export const App = () => {
  const [userNumber, setUserNumber] = useState(0);
  const { isLoading, data, error } = useFetch(`${apiPath}/${userNumber}`, {
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
        <NumberInput handleSubmit={handleSubmit} />
        {isLoading && <LoaderBar />}
        {<Result data={data} error={error} />}
      </div>
    </div>
  );
};
