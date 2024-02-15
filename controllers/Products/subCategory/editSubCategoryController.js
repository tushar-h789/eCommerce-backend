const EditSubCategory = require("../../../model/subCategorySchema");

const editSubCategoryController = async (req, res) => {
  try {
    // Extract categoryId from the request body
    const { id, name } = req.body;
    console.log("Request Body:", req.body);

    // Convert the category name to lowercase for a case-insensitive search
    const lowercaseName = name.toLowerCase();

    const existingCategory = await EditSubCategory.findOne({ name: lowercaseName });

    if (existingCategory) {
      return res.status(200).send("Sub Category Already Exists");
    } else {
      // Find the category by id and update its name
      await EditSubCategory.findByIdAndUpdate({ _id: id }, { name: lowercaseName });

      // Send a success response
      res.status(200).send({ success: "Sub Category edit successfully!" });
    }
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error editing sub category:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = editSubCategoryController;
