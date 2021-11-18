var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var assignSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    questions: {
        type: String,
    },
    class: {
        type: mongoose.Types.ObjectId,
            ref: "Class",
    },
    responses: {
        type: [{
            sid: {
                type: mongoose.Types.ObjectId,
                ref: "Student",
            },
            response: {
                type: String,
            },
        }, ],
    },
    startime: {
        type: String,
        // Failed to enter Date DataType into PostMan
    },
    endtime: {
        type: String,
    },
});

module.exports = mongoose.model("Assignment", assignSchema);