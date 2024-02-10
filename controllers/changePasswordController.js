const User = require('../model/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const changePasswordController = async (req, res) => {
  try {
    // Extract email and password from the request body
    const { token, password } = req.body;

    // Check if the token is empty
    if (!token) {
      return res.status(400).send({ error: "Token is empty" });
    }

    // Verify the token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async function (err, decode) {
      if (err) {
        // Handle token verification error
        console.error("Error verifying token", err);
        return res.status(400).send({ error: "Invalid token" });
      }

     // Bcrypt password generation
     const hashedPassword =await bcrypt.hash(password, 10);

      // Update the user's password and clear the existing token
      const updatedUser = await User.findOneAndUpdate(
        { email: decode.email, token },
        { password: hashedPassword, token: "" }, // Set token to an empty string
        {
          returnDocument: true,
          new: true,
          strict: false, // Schema does not define token, so strict mode is set to false
        }
      );

      // Check if the user was found and updated
      if (!updatedUser) {
        // If user is not found or email and token do not match, send an appropriate response
        return res.status(400).send({ error: "Email and token do not match" });
      }

      console.log(updatedUser);

      // Send a success response
      res.send({ success: "Password updated successfully" });
    });
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error updating password", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = changePasswordController;
