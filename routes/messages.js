var express = require('express');
var router = express.Router();
const msgsModel = require('../Models/message');
var createError = require('http-errors');

/* GET message page. */
router.get('/', function (req, res, next) {
    msgsModel.find((err, data) => {
        res.send(data)
    });
});

router.post("/create", (req, res, next) => {
    msgsModel.create(req.body, (err, data) => {
        if (err)
            res.send(createError(err));
        // res.render('error', err);
        console.log('success');
        res.redirect("/api/messages");
    });
});

router.get('/:id/message', (req, res, next) => {
    let id = req.params.id;
    msgsModel.find({ _id: id }, (err, msg) => {
        if (err)
            res.render('error', err);
        res.send(msg)
    });
});

router.patch('/:id/edit', (req, res, next) => {
    msgsModel.updateOne({ _id: req.params.id }, (err, result) => {
        if (err)
            res.render('error');
        console.log(result);
        res.redirect('/api/messages');
    });
});

router.delete('/:id/del', (req, res, next) => {
    msgsModel.deleteOne({ _id: req.params.id }, (err, result) => {
        if (err)
            res.render('error');
        console.log(result);
        res.redirect('/api/messages');
    });
});


module.exports = router;
