const User = require("../model/userSchema");

const userListController = async (req, res) => {
  try {
    const userData = await User.find({});
    console.log(userData);
    res.send(userData);
  } catch {
    // Handle any unexpected errors and send a 500 response
    console.error("Error updating password", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = userListController;
