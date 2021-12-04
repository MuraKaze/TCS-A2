var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var teacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
    }
});

module.exports = mongoose.model('Teacher', teacherSchema);