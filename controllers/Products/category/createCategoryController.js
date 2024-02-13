const Category = require("../../../model/categorySchema");

// Controller function for handling category creation
const createCategoryController = async (req, res) => {
  try {
    // Destructure relevant data from the request body
    const { name, ownerId } = req.body;

    // Check if the category with the same name already exists
    const existingCategory = await Category.findOne({ name: name });

    if (existingCategory) {
      // If the category already exists, send a response indicating it
      return res.status(200).send("Category Already Exists");
    } else {
      // Create a new Category instance based on the data
      const category = new Category({
        name: name,
        ownerId: ownerId,
      });

      // Save the category to the database
      await category.save();

      // Send a success response
      res.status(200).send({ success: "Category created successfully!" });

      // Log the category details for verification (optional)
      console.log(category);
    }
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error creating category:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

// Export the createCategoryController function
module.exports = createCategoryController;
