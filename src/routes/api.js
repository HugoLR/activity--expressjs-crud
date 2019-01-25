const { Router }  = require('express');

const app = Router();

const Users = require('../controllers/users/users');

app.get('/users', Users.index);
app.get('/users/:id', Users.find);

module.exports = app;
