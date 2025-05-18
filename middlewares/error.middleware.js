function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";
  const message = err.message || "Something went wrong!";
  const stack = err.stack || "No stack trace available.";

  res.status(statusCode).json({
    status,
    message,
    stack: process.env.NODE_ENV === "production" ? null : stack,
    error: process.env.NODE_ENV === "production" ? null : err,
  });
}

export default errorHandler;
