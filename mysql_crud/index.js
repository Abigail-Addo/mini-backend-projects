import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRouter from './routes/user.routes.js'
const PORT = process.env.PORT;


const app = express();
app.use(express.json());
app.use(userRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));