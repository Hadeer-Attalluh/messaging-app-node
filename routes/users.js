var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const userModel = require('../Models/user');
const msgsModel = require('../Models/message');
/* GET users listing. */
router.get('/', function (req, res, next) {
  userModel.find((err, data) => {
    if (err)
      res.render('error', err);
    res.send(data)
  });
});

router.get('/:id/from', (req, res, next) => {
  //msgs that were send by that user
  let id = req.params.id;
  msgsModel.find({ from: id }, (err, result) => {
    if (err)
      res.render('error', err);
    res.send(result);
  });
});

router.get('/:id/to', (req, res, next) => {
  //msgs that were send to that user
  let id = req.params.id;
  // res.send(id);
  msgsModel.find({ to: id }, (err, result) => {
    if (err)
      res.render('error', err);
    res.send(result);
  });
});

router.get('/:id/details', (req, res, next) => {
  let id = req.params.id;
  userModel.find({ _id: id }, (err, user) => {
    if (err)
      res.render('error', err);
    res.send(user)
  });
});

router.post('/create', (req, res, err) => {
  debugger;
  userModel.create(req.body, (err, result) => {
    debugger;
    if (err)
      return next(createError(err));
    // console.log(result);
    else
      res.send(result);
    // res.redirect(`${result._id}/details`);
  })
});

module.exports = router;
