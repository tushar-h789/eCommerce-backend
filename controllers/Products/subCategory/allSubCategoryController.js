const SubCategory = require("../../../model/subCategorySchema");

// Controller function for fetching all subcategories
const allSubCategoryController = async (req, res) => {
  try {
    // Retrieve all subcategories from the database, populating the 'categoryId' field
    const allSubCategory = await SubCategory.find({}).populate('categoryId');

    // Log the retrieved subcategories for verification (optional)
    console.log(allSubCategory);

    // Send the retrieved subcategories as a response to the client
    // Alternatively, you can send a success message along with the data
    res.send({ success: "Subcategories found", data: allSubCategory });
  } catch (error) {
    // Handle any errors that occur during the process
    console.log(error);
    // Send an error response to the client
    res.status(500).send({ error: "Internal Server Error" });
  }
};

// Export the allSubCategoryController function
module.exports = allSubCategoryController;
