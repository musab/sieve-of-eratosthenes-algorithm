## Getting Started

### Prerequisites

- node (I'm working on v12.16.1)

### Installation instructions

Begin by running the node server:

```
cd server
npm install
npm start
```

Once the server is running, in a seperate tab start the client

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

The server also includes integration test under `src/index.test.js`, which spins up the express app using `supertest`.

### Technolgoy used

Frontend:

- Scaffolded via create-react-app
- React, Webpack, Babel, Jest

Backend

- Express, Webpack, Babel, Jest, supertest

---

### Questions

Musa Barighzaai
<br>
mbarighzaai@icloud.com
