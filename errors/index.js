class CustomError extends Error {
  constructor(httpStatus, message) {
    super(message);
    this.httpStatus = httpStatus;
  }
}

module.exports = {
  CustomError,
};
