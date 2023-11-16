const mongoose = require('mongoose');

const LearnerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const LearnerModel = mongoose.model("learners", LearnerSchema)

module.exports = LearnerModel;