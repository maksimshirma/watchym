import {Schema, model} from "mongoose";

const schema = new Schema({
    category: {type: String},
    _id: {type: String, required: true},
    amount: {type: Number, required: true},
    account: {type: String, required: true},
    date: {type: Number, required: true},
    type: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
}, {
    timestamps: true
});

export const Operation = model("Operation", schema);