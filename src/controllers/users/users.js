const users = require('../../../data.json');

const controllers = {
  index: (req, res) => {
    res
      .status(200)
      .json({
        data:users
      })
  },
  find: (req, res) => {
    const queryId = req.params.id

    const user = users.users.filter(user => {
      return user.id.toString() === queryId
    })
    res
      .status(200)
      .json({
        data:user
      })
  },
};

module.exports = controllers;
