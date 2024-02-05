const User = require("../model/userSchema");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      return res.status(401).send({ error: "Credentials are not valid" });
    }

    // Compare hashed password
    bcrypt.compare(password, existingUser.password, function (err, result) {
      if (err) {
        console.error("Error comparing passwords:", err);
        return res.status(500).send({ error: "Internal Server Error" });
      }

      if (result) {
        res.send({ success: "Login successful" });
      } else {
        res.status(401).send({ error: "Credentials are not valid" });
      }
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = loginController;
