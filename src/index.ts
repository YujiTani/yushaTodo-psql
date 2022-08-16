import express from 'express';
import connectDB from "./DB/connect"
const app = express();
const PORT = 5000;
require('dotenv').config();

const userRoute = require('./Routes/users');
const taskRoute = require('./Routes/tasks');

app.use(express.json());

// ルーティング
app.use("/api/v0/users", userRoute);
app.use("/api/v1/tasks", taskRoute);

const start = async() => {
    try {
        // DBに接続
        connectDB.connect();

        app.listen(PORT, () => {
            console.log('start server');
            console.log('http://localhost:5000/');
        })
    } catch (error) {
        console.log('DBへの接続に失敗しました');
        console.warn(error)
    }
}

start()