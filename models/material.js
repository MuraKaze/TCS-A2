var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var materialSchema = new Schema({
    cid: {
        type: mongoose.Types.ObjectId,
        ref: 'class'
    },
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Material', materialSchema);