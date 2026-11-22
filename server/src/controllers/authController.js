const StudentModel = require("../models/Students.js");
const User = require('../models/Students.js');
const bcrypt = require('bcrypt'); 

// forgot-password
const forgotPassword = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.json({ Status: "User not existed" });
        }

        // encrypt pass
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.findByIdAndUpdate({ _id: user._id }, { password: hashedPassword });
        
        // normal pass
        // await User.findByIdAndUpdate({ _id: user._id }, { password: password });
        
        return res.json({ Status: "Success" });

    } catch (err) {
        console.log(err);
        res.json({ Status: "Server Error" });
    }
};

// login
const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await StudentModel.findOne({ email: email });
        if (user) {
            
            const isPasswordValid = await bcrypt.compare(password, user.password);
            
            if (isPasswordValid) {
                res.json("success");
            } else {
                res.json("password is incorrect");
            }
        } else {
            res.json("no record existed");
        }
    } catch (err) {
        res.json(err);
    }
};

// register
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const student = await StudentModel.create({
            name,
            email,
            password: hashedPassword
        });

        res.json(student);
    } catch (err) {
        console.log(err);
        res.json({ Status: "Server Error" });
    }
};

module.exports = {
    forgotPassword,
    login,
    register
};