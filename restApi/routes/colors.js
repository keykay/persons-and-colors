var express = require('express');
var router = express.Router();
var colorsDb = require('./../database/colors');

/* GET retrieve list of colors */
router.get('/', function (req, res, next) {
  res.send(colorsDb.data);
});

/* GET retrieve color */
router.get('/:id', function (req, res, next) {
  var c = colorsDb.data.find(c => c.id === +req.params.id);
  if (!c) {
    res.status(404).send({ message: 'Color not found.' })
  } else {
    res.send(c);
  }
});

/* POST create color */
router.post('/', function (req, res, next) {
  var c = req.body;
  c['id'] = ++colorsDb.sequence;
  c['createdDate'] = new Date();
  colorsDb.data.push(c);
  res.send(c);
});

/* PUT update color */
router.put('/:id', function (req, res, next) {
  var c = colorsDb.data.find(c => c.id === +req.params.id);
  if (!c) {
    res.status(404).send({ message: 'Color not found.' })
  } else {
    c.name = req.body.name;
    c.hex = req.body.hex;
    res.send(c);
  }
});

/* DELETE delete color */
router.delete('/:id', function (req, res, next) {
  var c = colorsDb.data.find(c => c.id === +req.params.id);
  if (!c) {
    res.status(404).send({ message: 'Color not found.' })
  } else {
    colorsDb.data = colorsDb.data.filter(c => c.id !== +req.params.id);
    res.send(c);
  }
});

module.exports = router;
