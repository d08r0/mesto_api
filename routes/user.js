const userRouter = require('express').Router();
const path = require('path');

userRouter.get('/users/:id', (req, res) => {
  const dataPath = path.join(__dirname, '../data/users.json');
  const users = require(dataPath);

  const user = users.filter((item) => item._id === req.params.id);

  if (user.length === 0) {
    res.status(404);
    res.contentType('JSON');
    res.send({ error: 'Такого пользователя нет' });
    return;
  }

  res.status(200);
  res.contentType('JSON');
  res.send(user);
});

module.exports = userRouter;
