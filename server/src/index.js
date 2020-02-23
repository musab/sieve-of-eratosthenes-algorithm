import express from 'express';
import routes from './routes';
import middleware from './middleware';

const app = express();

const PORT = 8080;

app.use(routes);
app.use(middleware.notFound);
app.use(middleware.centralErrorHandler);

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

process.on('unhandledRejection', reason => {
  console.log('Unhandled Rejection at:', reason.stack || reason);
});
