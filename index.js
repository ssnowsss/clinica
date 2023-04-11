import express from "express"
import mongoose from "mongoose"

import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

// routes
import authRoute from "./api/routes/auth.js"
import patientRoute from "./api/routes/patient.js"
const app = express()
dotenv.config()

const connect = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect("mongodb+srv://eslam:eslam@cluster0.pzqrseq.mongodb.net/clinica?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => { console.log("connected to db") })
        .catch((err) => { throw err })
}
app.use(cookieParser())
app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Credentials": true})
    next()
})
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/patient", patientRoute)


app.listen(8800, () => {
    connect()
    console.log("connected to backend");
})