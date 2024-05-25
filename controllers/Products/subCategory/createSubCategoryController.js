const SubCategory = require("../../../model/subCategorySchema");

// Controller function for handling category creation
const subCreateCategoryController = async (req, res) => {
  try {
    // Destructure relevant data from the request body
    const { name, categoryId } = req.body;

    // Check if the category with the same name already exists
    const existingCategory = await SubCategory.findOne({ name: name });

    if (existingCategory) {
      // If the category already exists, send a response indicating it
      // return res.status(200).send("Sub Category Already Exists");
    } else {
      // Create a new Category instance based on the data
      const subCategory = new SubCategory({
        name: name,
        categoryId: categoryId,
      });

      // Save the category to the database
      await subCategory.save();

      // Send a success response
      // res.status(200).send({ success: "Sub Category created successfully!" });
      res.send(subCategory)

      // Log the category details for verification (optional)
      console.log(subCategory);
    }
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error creating category:", error);
    // res.status(500).send({ error: "Internal Server Error" });
  }
};

// Export the createCategoryController function
module.exports = subCreateCategoryController;
