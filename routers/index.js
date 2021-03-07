const express = require('express');
const userController = require('../controllers/users');

const router = express();

router.post('/users', userController.createUser);
router.get('/users', userController.listUsers);
router.get('/users/:userId', userController.userDetails);

module.exports = router;
