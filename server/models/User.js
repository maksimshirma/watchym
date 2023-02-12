import {Schema, model} from "mongoose";

const schema = new Schema({
    name: {type: String},
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {type: String},
    image: {type: String},
}, {
    timestamps: true
});

export const User = model("User", schema);