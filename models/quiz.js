var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var quizSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    questions: {
        type: String,
    },
    cid: {
        type: mongoose.Types.ObjectId,
        ref: "Class",
    },
    response: {
        type: [{
            sid: { type: mongoose.Types.ObjectId, ref: "student" },
            response: {
                type: String,
            },
        }, ],
    },
    total: {
        type: Number
    }
});

module.exports = mongoose.model("Quiz", quizSchema);