const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const StudentModel = require("./models/Students.js")
const bcrypt = require('bcrypt'); 
const User = require('./models/Students');

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/student')

//forgot-password
app.post('/forgot-password', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.json({ Status: "User not existed" });
        }

         //encryprt pass
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.findByIdAndUpdate({ _id: user._id }, { password: hashedPassword });
         
        //normal pass
        //await User.findByIdAndUpdate({ _id: user._id }, { password: password });
        
        return res.json({ Status: "Success" });

    } catch (err) {
        console.log(err);
        res.json({ Status: "Server Error" });
    }
});

//login
app.post('/login', async (req, res) => {
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
})

//register
app.post('/register', async (req, res) => {
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
});

app.listen(3001, () => {
    console.log("Server is running")
});

