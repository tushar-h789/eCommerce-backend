const Category = require("../../../model/categorySchema");

// Controller function for handling category creation
const categoryController = (req, res) => {
  // Destructure relevant data from the request body
  const { name, ownerId } = req.body;

  // Create a new Category instance based on the data
  const category = new Category({
    name: name,
    ownerId: ownerId,
  });

  // Save the category to the database
  category.save();

  // Log the category details for verification (optional)
  console.log(category);
};

// Export the categoryController function
module.exports = categoryController;
