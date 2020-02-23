import express from 'express';
import { eratosthenes } from './utils/eratosthenes';
import { getMedian } from './utils/getMedian';

const app = express();

const PORT = 8080;

app.get('/median-prime/:userNumber', (req, res, next) => {
  const { userNumber } = req.params;

  if (Boolean(parseInt(userNumber))) {
    try {
      const primeSet = eratosthenes(userNumber);
      const median = getMedian(primeSet);

      res.json({ median });
    } catch (error) {
      err.statusCode = 500;
      next(err);
    }

    // console.log(med);
  } else {
    let err = new Error(`Bad Request`);
    err.statusCode = 400;
    next(err);
  }
});

app.get('*', function(req, res, next) {
  let err = new Error(
    `The server has not found anything matching the Request-URI "${req.originalUrl}".`
  );
  err.statusCode = 404;
  next(err);
});

// centralized error-handling middleware
// see https://gist.github.com/zcaceres/2854ef613751563a3b506fabce4501fd
app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500; // Sets a generic server error status code if none is part of the err

  res.status(err.statusCode).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

process.on('unhandledRejection', reason => {
  console.log('Unhandled Rejection at:', reason.stack || reason);
});
