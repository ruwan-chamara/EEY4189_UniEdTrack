const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/student');
        console.log("Connection success");
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;