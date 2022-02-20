var express = require('express');
var router = express.Router();

var { Articole } = require('../models');

/* GET users listing. */
router.post('/citesc', async function(req, res, next) {
  const articole = await Articole.findAll();
  res.send(articole);
});

module.exports = router;
