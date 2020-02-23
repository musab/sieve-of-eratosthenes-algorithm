export default {
  centralErrorHandler: (err, req, res, next) => {
    // centralized error-handling middleware
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;

    res.status(err.statusCode).send(err.message);
  },
  notFound: (req, res, next) => {
    let err = new Error(
      `The server has not found anything matching the Request-URI "${req.originalUrl}".`
    );
    err.statusCode = 404;
    next(err);
  }
};
