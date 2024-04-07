import {  DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ["male", "female", "other"],
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: "Kasoa",
    },
    literate: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: true,
  }
);

// await User.sync({ force: true });
// console.log("The table for the user model was just recreated");

await User.sync();
console.log("The table for the user model was just created");



export default User;