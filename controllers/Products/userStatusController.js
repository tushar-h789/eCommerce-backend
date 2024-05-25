const statusChange = require("../../model/userSchema");

// Controller to handle user status change (isAdmin and isMerchant)
const userStatusController = async (req, res) => {
  try {
    // Extract user ID, isAdmin, and isMerchant status from the request body
    const { id, isAdmin, isMerchant } = req.body;
    console.log("Status Change Request:", id, isAdmin, isMerchant);

    // Construct the update object based on isAdmin and isMerchant values
    const update = {};
    if (isAdmin !== undefined) {
      update.isAdmin = isAdmin;
    }
    if (isMerchant !== undefined) {
      update.isMerchant = isMerchant;
    }

    // Find the user by ID and update their isAdmin and isMerchant status
    await statusChange.findByIdAndUpdate(id, update);

    // Send a success response with the updated isAdmin and isMerchant status
    res.status(200).send({ isAdmin, isMerchant });
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error changing user status:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = userStatusController;
