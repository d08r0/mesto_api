const usersRouter = require('express').Router();
const users = require('../data/users.json');

usersRouter.get('/users', (req, res) => {
  res.send(users);
});

module.exports = usersRouter;