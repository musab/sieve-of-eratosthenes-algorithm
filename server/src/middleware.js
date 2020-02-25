export default {
  centralErrorHandler: (err, req, res, next) => {
    // centralized error-handling middleware
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;

    res.status(err.statusCode).send(err.message);
  },
  notFound: (req, res, next) => {
    const errorMsg = `The server has not found anything matching the Request-URI "${req.originalUrl}".`;
    let err = new Error(errorMsg);

    err.statusCode = 404;
    next(err);
  }
};
