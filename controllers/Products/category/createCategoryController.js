const Category = require("../../../model/categorySchema");

// Controller function for handling category creation
const createCategoryController = async (req, res) => {
  // Destructure relevant data from the request body
  const { name, ownerId } = req.body;

  const existingCategory = await Category.findOne({ name: name });

  if (existingCategory) {
    return res.status(200).send("Category Already Exists");
  } else {
    // Create a new Category instance based on the data
    const category = new Category({
      name: name,
      ownerId: ownerId,
    });

    // Save the category to the database
    category.save();

    res.send({ success: "Category created successfully! " });

    // Log the category details for verification (optional)
    console.log(category);
  }
};

// Export the categoryController function
module.exports = createCategoryController;
