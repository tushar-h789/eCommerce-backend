const SubCategory = require("../../../model/subCategorySchema");

// Controller function for handling subcategory creation
const createSubcategoryController = (req, res) => {
  // Destructure relevant data from the request body
  const { name, categoryId } = req.body;

  // Create a new SubCategory instance based on the data
  const createSubCategory = new SubCategory({
    name: name,
    categoryId: categoryId,
  });

  // Save the subcategory to the database
  createSubCategory.save();

  // Log the subcategory details for verification (optional)
  console.log(createSubCategory);

  // Send a success response back to the client
  res.send({ success: "Sub Category created successfully!" });
};

// Export the createSubcategoryController function
module.exports = createSubcategoryController;
