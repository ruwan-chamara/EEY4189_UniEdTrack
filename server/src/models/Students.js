const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const StudentModel = mongoose.model("students", studentSchema)

module.exports = StudentModel
