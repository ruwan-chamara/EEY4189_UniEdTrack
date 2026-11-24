const express = require("express");
const cors = require("cors");
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/', authRoutes);

app.listen(3001, () => {
    console.log("Server is running");
});