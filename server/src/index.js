import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import middleware from './middleware';
var cors = require('cors');
require('dotenv').config();

export const app = express();

// development purpose only, allow CORS
app.use(cors());

// log all requests
app.use(
  morgan((tokens, req, res) =>
    [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms'
    ].join(' ')
  )
);

app.use(routes);
app.use(middleware.notFound);
app.use(middleware.centralErrorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running at: http://localhost:${process.env.PORT}/`);
});

process.on('unhandledRejection', reason => {
  console.log('Unhandled Rejection at:', reason.stack || reason);
});
