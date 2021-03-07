const userService = require('../services/users');
const { IlumeError } = require('../errors');

async function createUser(req, res) {
  const { body } = req;
  try {
    const user = await userService.createUser(body);
    return res.status(201).send(user);
  } catch (err) {
    // TODO use middleware for error handling
    if (err instanceof IlumeError) {
      return res.status(err.httpStatus).send(err.message);
    }
    return res.status(500).send(err.message);
  }
}

async function listUsers(req, res) {
  const { page, perpage, term } = req.query;

  try {
    const user = await userService.listUsers(Number(page), term, Number(perpage));
    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof IlumeError) {
      return res.status(err.httpStatus).send(err.message);
    }
    return res.status(500).send(err.message);
  }
}
async function userDetails(req, res) {
  const { userId } = req.params;
  try {
    const user = await userService.getUserDetails(userId);
    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof IlumeError) {
      return res.status(err.httpStatus).send(err.message);
    }
    console.error(err); // eslint-disable-line no-console
    return res.status(500).send(err.message);
  }
}

module.exports = {
  createUser,
  listUsers,
  userDetails,
};
