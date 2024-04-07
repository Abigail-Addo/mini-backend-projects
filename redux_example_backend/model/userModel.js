import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minLength: [5, "please the password should atleast have five characters"]
    },
    tickets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ticket'
        }
    ]
}, { timestamps: true });

const User = model('user', UserSchema);

export default User;