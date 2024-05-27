const SubCategory = require("../../../model/subCategorySchema");
const Category = require("../../../model/categorySchema");

// Controller function for handling sub-category creation
const subCreateCategoryController = async (req, res) => {
  try {
    // Destructure relevant data from the request body
    const { name, categoryId } = req.body;

    // Check if a sub-category with the same name already exists
    const existingSubCategory = await SubCategory.findOne({ name: name });

    if (existingSubCategory) {
      // If the sub-category already exists, send a response indicating it
      return res.status(200).send("Sub Category Already Exists");
    } else {
      // Create a new SubCategory instance based on the data
      const subCategory = new SubCategory({
        name: name,
        categoryId: categoryId,
      });

      // Save the sub-category to the database
      await subCategory.save();

      // Update the parent category to include the new sub-category
      await Category.findOneAndUpdate(
        { _id: categoryId },
        { $push: { subCategoryId: subCategory._id } },
        { new: true }
      );

      // Send a success response with the created sub-category
      res.status(201).send({ success: "Sub Category created successfully!", subCategory });
    }
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error creating sub-category:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

// Export the subCreateCategoryController function
module.exports = subCreateCategoryController;
