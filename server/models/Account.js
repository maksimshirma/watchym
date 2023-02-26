import {Schema, model} from "mongoose";

const schema = new Schema({
    name: {type: String, required: true},
    _id: {type: String, required: true},
    amount: {type: Number, required: true},
    number: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true}
}, {
    timestamps: true
});

export const Account = model("Account", schema);