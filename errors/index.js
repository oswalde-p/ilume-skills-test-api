class IlumeError extends Error {
  constructor(httpStatus, message) {
    super(message);
    this.httpStatus = httpStatus;
  }
}

module.exports = {
  IlumeError,
};
