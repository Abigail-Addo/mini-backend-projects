import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  }
);

try {
    sequelize.authenticate();
    console.log("Connection established")
} catch (error) {
    console.error("mysql connection failed", error)
}



export default sequelize