var mongoose = require('mongoose');
var schema = mongoose.Schema;
var resSchema = new schema({
    cid: {
        type: mongoose.Types.ObjectId,
        ref: 'Class',
        required: true,
    },
    subid: {
        type: mongoose.Types.ObjectId,
        ref: 'Subject',
        required: true,

    },
    sid: {
        type: mongoose.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    grade: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Result', resSchema)