var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var responseSchema = new Schema({

    quizid: {
        type: mongoose.Types.ObjectId,
        ref: 'Quiz'
    },
    responses: {
        type: [{
            sid: {
                type: mongoose.Types.ObjectId,
                ref: 'Student'
            },
            response: {
                type: String
                    //Answers are not required, Student can leave answer sheet as blank
            }
        }]
    }
});








module.exports = mongoose.model('Quizresponse', responseSchema);