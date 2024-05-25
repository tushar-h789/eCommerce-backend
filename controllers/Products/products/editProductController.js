const EditProduct = require("../../../model/productSchema");

const editProductController = async (req, res) => {
  try {
    // Extract categoryId from the request body
    const { id, name } = req.body;
    // console.log("Request Body:", req.body);

    // Convert the category name to lowercase for a case-insensitive search
    const lowercaseName = name.toLowerCase();

    const existingProduct = await EditProduct.findOne({ name: lowercaseName });

    if (existingProduct) {
      return res.status(200).send("Product Already Exists");
    } else {
      // Find the category by id and update its name
      await EditProduct.findByIdAndUpdate({ _id: id }, { name: lowercaseName });

      // Send a success response
      res.status(200).send({ success: "Product edit successfully!" });
    }
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error editing Product:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = editProductController;
