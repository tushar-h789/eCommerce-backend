const DeleteSubCategory = require("../../../model/subCategorySchema");

// Controller function for handling category deletion
const deleteSubCategoryController = async (req, res) => {
  try {
    // Extract categoryId from the request body
    const { subCategoryId } = req.body;
    console.log("Request Body:", req.body);

    // Find the category by id and delete it
    await DeleteSubCategory.findByIdAndDelete({ _id: subCategoryId });

    // Send a success response
    res.status(200).send({ success: "Sub category deleted successfully!" });
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error deleting sub category:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

// Export the deleteCategoryController function
module.exports = deleteSubCategoryController;
