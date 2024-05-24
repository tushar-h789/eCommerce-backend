const DeleteStore = require("../../../model/storeSchema");

// Controller function for handling product deletion
const deleteStoreController = async (req, res) => {
  try {
    // Extract productId from the request body
    const { storeId: storeId } = req.body;
    console.log("Request Body:", req.body);

    // Ensure productId is defined and not null
    if (!storeId) {
      return res.status(400).send({ error: "Store ID is required" });
    }

    // Find the product by id and delete it
    const deletedStore = await DeleteStore.findByIdAndDelete(storeId);

    // Check if the product was found and deleted
    if (!deletedStore) {
      return res.status(404).send({ error: "Store not found" });
    }

    // Send a success response
    res.status(200).send({ success: "Store deleted successfully!" });
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error deleting Store:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

// Export the deleteProductController function
module.exports = deleteStoreController;
