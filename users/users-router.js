const router = require('express').Router();
const db = require('../database/dbConfig.js')
const getJokes = require('../config/routes.js');


router.get('/', getJokes, (req, res) => {
    console.log('im here')
  db('users')
  .select('id', 'username', 'password')
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;