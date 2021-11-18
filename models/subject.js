var mongoose = require('mongoose');
var schema = mongoose.Schema;
var subjectSchema = new schema({
    name: {
        type: String,
        required: true
    },
    credithour: {
        type: Number,
        required: true
    }

});
module.exports = mongoose.model('Subject', subjectSchema)