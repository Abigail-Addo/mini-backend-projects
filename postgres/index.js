import express from 'express';
import pool from './config/db.js';

const app = express();

const Port = process.env.PORT

app.use(express.json());

(async function () {
    const connect = await pool.connect();

    if(connect) console.log("db connected successfully")
})()




app.listen(Port, () => console.log("Server is running on port 5555"))