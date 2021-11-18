var express = require('express');
var router = express.Router();
var Teacher = require('../models/teacher');
var Material = require('../models/material')
var Quiz = require('../models/quiz')
var Assignment = require('../models/assignment')
var Result = require('../models/result')

/* GET users listing. */

router.get('/', function(req, res, next) {
    res.render('teacher', { title: "Teacher Dashboard" })
})





router.post('/addmat', function(req, res) {
    Material.create(req.body)
        .then((material) => {
            console.log('Material has been Added ', material);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(material);
        }, (err) => next(err))
        .catch((err) => next(err));



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
router.get('/viewattquiz', function(req, res, next) {
    Quiz.find({ 'responses.0': { '$exists': true } }).sort('title').exec(function(error, results) {

        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });


})

router.get('/quiz/:id', function(req, res, next) {
    Quiz.findById(req.params.id).sort('title').exec(function(error, results) {

        if (error) {
            return next(error);
        }
        // Respond with valid data
        if (results.responses.length > 0) {
            return res.json(results);
        } else {
            return res.json({ msg: "Quiz not attempted yet" })
        }
    });


})








router.delete('/material/:id', function(req, res, next) {
    Material.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});


router.post('/addquiz', function(req, res) {
    Quiz.create(req.body)
        .then((quiz) => {
            console.log('Quiz has been Added ', quiz);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(quiz);
        }, (err) => next(err))
        .catch((err) => next(err));
})



router.delete('/quiz/:id', function(req, res, next) {
    Quiz.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});




router.post('/addassign', function(req, res) {
    Assign.create(req.body)
        .then((assign) => {
            console.log('Assignment has been Posted', assign);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(assign);
        }, (err) => next(err))
        .catch((err) => next(err));
})




router.delete('/assignment/:id', function(req, res, next) {
    Assign.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});


// Download Attempted assignMENT
router.get('/assign/:id', function(req, res, next) {
    Assign.findById(req.params.id).sort('title').exec(function(error, results) {

        if (error) {
            return next(error);
        }
        // Respond with valid data

        if (results.responses.length > 0) {
            return res.json(results);
        } else {
            return res.json({ msg: "Assignment not attempted yet" })
        }
    });


})



router.get('/viewattassign', function(req, res, next) {
    Assign.find({ 'responses.0': { '$exists': true } }).sort('title').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
})

router.post('/addmarks', function(req, res) {
    Result.create(req.body)
        .then((quiz) => {
            console.log('Result has been Posted ', quiz);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(quiz);
        }, (err) => next(err))
        .catch((err) => next(err));
})

router.put('/marks/:id', function(req, res, next) {
    Result.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    }, function(err, results) {
        if (err) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    })
});

router.delete('/marks/:id', function(req, res, next) {
    Result.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});

module.exports = router;