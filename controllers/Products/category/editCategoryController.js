const EditCategory = require("../../../model/categorySchema");

const editCategoryController = async (req, res) => {
  try {
    // Extract categoryId from the request body
    const { id, name } = req.body;
    // console.log("Request Body:", req.body);

    // Convert the category name to lowercase for a case-insensitive search
    const lowercaseName = name.toLowerCase();

    const existingCategory = await EditCategory.findOne({ name: lowercaseName });

    if (existingCategory) {
      return res.status(200).send("Category Already Exists");
    } else {
      // Find the category by id and update its name
      await EditCategory.findByIdAndUpdate({ _id: id }, { name: lowercaseName });

      // Send a success response
      res.status(200).send({ success: "Category edit successfully!" });
    }
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error editing category:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = editCategoryController;
