var express = require('express');
var router = express.Router();
var Class = require('../models/class')
const Material = require('../models/material')
const Result = require('../models/result')
    /* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('head', { title: "Head Dashbaoard" })
});

router.get('/class', function(req, res, next) {
    Class.find().sort('name').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
})

router.get('/materials', function(req, res, next) {
    Material.find().sort('name').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
})

router.get('/results/class/:id', function(req, res, next) {
    Result.find({ cid: req.params.id }).sort('name').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
})

router.get('/results/student/:id', function(req, res, next) {
    Result.find({ sid: req.params.id }).sort('name').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
})

module.exports = router;