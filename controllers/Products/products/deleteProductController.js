const DeleteProduct = require("../../../model/productSchema");

// Controller function for handling product deletion
const deleteProductController = async (req, res) => {
  try {
    // Extract productId from the request body
    const { productId } = req.body;
    // console.log("Request Body:", req.body);

    // Ensure productId is defined and not null
    if (!productId) {
      return res.status(400).send({ error: "Product ID is required" });
    }

    // Find the product by id and delete it
    const deletedProduct = await DeleteProduct.findByIdAndDelete(productId);

    // Check if the product was found and deleted
    if (!deletedProduct) {
      return res.status(404).send({ error: "Product not found" });
    }

    // Send a success response
    res.status(200).send({ success: "Product deleted successfully!" });
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error deleting product:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

// Export the deleteProductController function
module.exports = deleteProductController;
