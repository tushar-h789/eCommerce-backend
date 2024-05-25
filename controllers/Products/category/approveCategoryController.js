const ApproveCategory = require("../../../model/categorySchema");

const approveCategoryController = async (req, res) => {
  try {
    // Extract categoryId from the request body
    const { id, isActive } = req.body;
    // console.log("Request Body:", req.body);
      // Find the category by id and update its name
      await ApproveCategory.findByIdAndUpdate({ _id: id }, { isActive: isActive });

      // Send a success response
      res.status(200).send({ success: "status changed!" });
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error editing category:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = approveCategoryController;
