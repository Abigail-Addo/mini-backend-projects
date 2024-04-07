import express from "express";
import dotenv from "dotenv";
dotenv.config();
import sequelize from "./config/db.js";
import route from './routes/route.js'
import User from "./model/user.model.js";
import Profile from "./model/profile.model.js";

const app = express();
const PORT = process.env.PORT;

// one to one relationship
User.hasOne(Profile);
Profile.belongsTo(User);

await sequelize.sync();
console.log("All tables have been created");

app.use(express.json());
app.use('/api', route)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


