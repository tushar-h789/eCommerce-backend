const User = require('../model/userSchema');

const changePasswordController = async (req, res) => {
  try {
    // Extract email and OTP from the request body
    const { email, password } = req.body;


    // Check if the user exists
    // if (!user) {
    //   // If the user is not found, send a 404 response
    //   return res.status(404).send({ error: "User not found" });
    // }

    // Check if the provided OTP matches the stored OTP for the user
    // if (user.otp === otp) {
    //   // If OTP matches, update the user's OTP and verification status
    //   await User.findOneAndUpdate({ email }, { otp: "", verify: true });

    //   // Send a success response
    //   res.send({ success: "OTP verified" });
    // } else {
    //   // If OTP does not match, send a 400 response
    //   res.status(400).send({ error: "OTP does not match" });
    // }
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error verifying OTP", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = changePasswordController;
