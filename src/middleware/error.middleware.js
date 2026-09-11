const AppError = require("../utils/AppError");

const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });

  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map(
      (error) => error.message
    );
    return res.status(400).json({
      status: "fail",
      message: "Validation Failed",
      errors: message
    });

  }

  if (err.code === 11000) {
    const field = Object.keys(err,keyValue)[0];

    return res.status(409).json({
      status: "fail",
      message: `${field} already exists`
    });

  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error"
  });
};

module.exports = errorHandler;