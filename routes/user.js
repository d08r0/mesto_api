const userRouter = require('express').Router();
const users = require('../data/users.json');

userRouter.get('/users/:id', (req, res) => {
  console.log(req.params.id);

  const user = users.filter((item) => item._id === req.params.id);

  if (user.length === 0) {
    res.status(404);
    res.send({ error: 'Такого пользователя нет' });
    return;
  }

  res.send(user);
});

module.exports = userRouter;
