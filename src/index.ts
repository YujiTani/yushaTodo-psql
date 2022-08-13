const express = require('express');
const app = express(); 
const PORT = 5000;
const userRoute = require('./Routes/users');
// const taskRoute = require('./Routes/tasks');
const connectDB = require("./DB/connect");
require('dotenv').config();

app.use(express.json());

// ルーティング
app.use("/api/v1/users", userRoute);
// app.use("/api/v1/tasks", taskRoute);

const start = async() => {
    try {
        // DB接続
        connectDB.connect();

        app.listen(PORT, () => {
            console.log('start server');
            console.log('http://localhost:5000/');
        })
    } catch (error) {
        console.warn(error)
    }
}

start()