const DeleteCategory = require("../../../model/categorySchema");

// Controller function for handling category deletion
const deleteCategoryController = async (req, res) => {
  try {
    // Extract categoryId from the request body
    const { categoryId } = req.body;
    // console.log("Request Body:", req.body);

    // Find the category by id and delete it
    await DeleteCategory.findByIdAndDelete({ _id: categoryId });

    // Send a success response
    res.status(200).send({ success: "Category deleted successfully!" });
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error deleting category:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

// Export the deleteCategoryController function
module.exports = deleteCategoryController;
