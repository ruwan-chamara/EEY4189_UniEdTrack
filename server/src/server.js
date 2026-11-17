import express from "express"
import {connectDB} from "./config/db.js"
import dotenv from "dotenv"

dotenv.config()

const app = express();

connectDB()

app.listen(5001,()=>{
    console.log("Server start on PORT:5001");
})

