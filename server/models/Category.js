import {Schema, model} from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export const Category = model("Category",schema);