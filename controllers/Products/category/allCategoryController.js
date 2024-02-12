const Category = require("../../../model/categorySchema");

const allCategoryController = async (req, res) => {
  try {
    // Fetch all categories and populate the 'ownerId' field, excluding the 'password' field from the owner's information.
    const categoryData = await Category.find({}).populate(
      "ownerId",
      "-password"
    );

    // Send the category data as a response.
    res.send(categoryData);
  } catch (error) {
    // Handle any unexpected errors and send a 500 response.
    console.error("Error fetching all categories:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = allCategoryController;
