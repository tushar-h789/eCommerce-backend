const User = require("../model/userSchema");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  try {
    // Extract email and password from the request body
    const { email, password } = req.body;

    // Find the user in the database based on the provided email
    const existingUser = await User.findOne({ email });
    console.log(existingUser);

    // Check if the user exists
    if (!existingUser) {
      // If the user is not found, send a 401 response
      return res.status(401).send({ error: "Credentials are not valid" });
    }

    if (existingUser.role === "User") {
      // If the user's role is "User," send an error response
      return res.status(403).send({ error: "User does not allow" });
    }

    // Compare hashed password using bcrypt
    bcrypt.compare(password, existingUser.password, function (err, result) {
      // Check for bcrypt comparison errors
      if (err) {
        console.error("Error comparing passwords:", err);
        return res.status(500).send({ error: "Internal Server Error" });
      }

      // Check if the password matches
      if (result) {
        // If the password matches, send a success response
        res.status(200).send({
          id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
          role: existingUser.role,
        });
      } else {
        // If the password does not match, send a 401 response
        res.status(401).send({ error: "Credentials are not valid" });
      }
    });
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error during login:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = loginController;
