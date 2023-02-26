import {Schema, model} from "mongoose";

const schema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {type: String, required: true},
    image: {type: String},
    accounts: [{type: Schema.Types.ObjectId, ref: "Account"}],
    operations: [{type: Schema.Types.ObjectId, ref: "Operation"}]
}, {
    timestamps: true
});

export const User = model("User", schema);