import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import morgan from 'morgan';
import ticketRoute from './routes/ticketRoute.js';
import userRoute from './routes/userRoute.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from './db.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173' // allowing metadata to passed to requests
}));
app.use('/api/tickets', ticketRoute);
app.use('/api/users', userRoute);
app.use(errorHandler);


app.listen(PORT, () => {
    connectDb()
    console.log(`Server running on port ${PORT}`);
})

// NODEMON