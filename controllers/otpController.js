const User = require('../model/userSchema')
const { findOneAndUpdate } = require("../model/userSchema");

const otpController = async (req, res)=>{
    const {email, otp} = req.body;
    // console.log(email, otp);
    const updateOtp = await User.find({email: email})
    // const updateOtp = await User.findOneAndUpdate({email: email}, {otp: "", verify: true})

    if(updateOtp[0].otp == otp){
        await User.findOneAndUpdate({email: email}, {otp: "", verify: true})
        res.send("OTP verifyed")
    }
}

module.exports = otpController