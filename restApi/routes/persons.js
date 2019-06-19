var express = require('express');
var router = express.Router();
var personsDb = require('./../database/persons');

/* GET retrieve list of persons */
router.get('/', function (req, res, next) {
  res.send(personsDb.data);
});

/* GET retrieve person */
router.get('/:id', function (req, res, next) {
  var p = personsDb.data.find(p => p.id === +req.params.id);
  if (!p) {
    res.status(404).send({ message: 'Person not found.' })
  } else {
    res.send(p);
  }
});

/* POST create person */
router.post('/', function (req, res, next) {
  var p = req.body;
  p['id'] = ++personsDb.sequence;
  p['createdDate'] = new Date();
  personsDb.data.push(p);
  res.send(p);
});

/* PUT update person */
router.put('/:id', function (req, res, next) {
  var p = personsDb.data.find(p => p.id === +req.params.id);
  if (!p) {
    res.status(404).send({ message: 'Person not found.' })
  } else {
    p.firstName = req.body.firstName;
    p.lastName = req.body.lastName;
    p.age = req.body.age;
    p.favoriteColorId = req.body.favoriteColorId;
    res.send(p);
  }
});

/* DELETE delete person */
router.delete('/:id', function (req, res, next) {
  var p = personsDb.data.find(p => p.id === +req.params.id);
  if (!p) {
    res.status(404).send({ message: 'Person not found.' })
  } else {
    personsDb.data = personsDb.data.filter(p => p.id !== +req.params.id);
    res.send(p);
  }
});

module.exports = router;
