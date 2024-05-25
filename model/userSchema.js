const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        default: null
    },
    verify: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["Admin", "Merchant", "User"],
        default: "User"
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isMerchant:{
        type: Boolean,
        default: false
    } 
});

module.exports = mongoose.model("User", userSchema);
