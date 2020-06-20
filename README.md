# Implementation of Sieve of Eratosthenes algorithm

### Function
Given an upper limit of n, write a function that will find the median prime number(s) of the set of prime numbers less than n.

### Example
- If `n = 10`, the set of prime numbers less than 10 is `[2,3,5,7]`, and so the medians are `[3,5]`.
- If `n = 18`, the set of prime numbers less than 10 is `[2,3,5,7,11,13,17]`, and so the medians are `[7]`.

## Getting Started

### Prerequisites

- node (I'm working on v12.16.1)

### Installation instructions

Begin by cloning this repo, and running the node server

```
cd server
npm install
npm start
```

Once the server is running, you need to start the client (run in separate terminal tab)

```
cd client
npm install
npm start
```

The client can then be accessed via `http://localhost:3000`.

#### Running tests

To run the tests, in either `server` or `client` execute the following:

```
npm test
```

The server also includes integration tests under `src/index.test.js`, which spins up the express app taking advantage of the great lib `supertest`.

### Technology used

Frontend:

- Scaffolded via create-react-app
- React, Webpack, Babel, Jest

Backend

- Express, Webpack, Babel, Jest, supertest

---

### Questions

twitter: @musab
