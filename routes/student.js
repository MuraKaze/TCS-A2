var express = require('express');
var router = express.Router();
var Teacher = require('../models/teacher');
var Student = require('../models/student')
const Material = require('../models/material')
const Quiz = require('../models/quiz')
const Assignment = require('../models/assignment')
const Result = require('../models/result')
    /* GET users listing. */

router.get('/', function(req, res, next) {
    res.render('student', { title: "Student Dashboard" })
})

router.get('/material', function(req, res, next) {
    Material.find().sort('name').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });


})


router.get('/material/:id', function(req, res, next) {
    Material.findById(req.params.id)
        .then((material) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(material);
        }, (err) => next(err))
        .catch((err) => next(err));

});



router.get('/viewquiz', function(req, res, next) {
    Quiz.find({}).populate('class', '-_id -teacher -students').sort('title').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });


})
router.put('/attemptquiz', function(req, res, next) {
    Quiz.findOneAndUpdate({ _id: req.body.quizid }, {
            "$push": {
                "responses": {
                    "sid": req.body.sid,
                    "response": req.body.response
                }
            }
        }, { new: true, upsert: false },
        function(error, results) {
            if (error) {
                return next(error);
            }
            // Respond with valid data
            res.json({ msg: "Quiz is attempted and response is saved" });
        });
});
router.put('/submitassignment', function(req, res, next) {
    Assign.findOneAndUpdate({ _id: req.body.assignid }, {
            "$push": {
                "responses": {
                    "sid": req.body.sid,
                    "response": req.body.response
                }
            }
        }, { new: true, upsert: false },
        function(error, results) {
            if (error) {
                return next(error);
            }
            // Respond with valid data
            res.json({ msg: "Assignent is attempted and response is saved" });
        });
});


router.get('/viewassignment', function(req, res, next) {
    Assign.find({}).populate('class', '-_id -teacher -students').sort('title').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });


})








router.get('/result/:subid', function(req, res, next) {
    Result.find({ subid: req.params.subid }).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});

router.get('/result/', function(req, res, next) {
    Result.find({ sid: req.body.sid }).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});







module.exports = router;