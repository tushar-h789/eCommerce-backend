const User = require("../model/userSchema");

const userListController = async (req, res) => {
  try {
    // Retrieve all user data from the database
    const userData = await User.find({});
    
    // Log user data for debugging
    console.log(userData);
    
    // Send the user data in the response
    res.send(userData);
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error retrieving user list", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = userListController;
