import {  DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const Profile = sequelize.define('Profile', {
    height: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT
    },
}, {
    timestamps: false
}
)


export default Profile;