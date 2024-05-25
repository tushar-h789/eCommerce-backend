const EditStore = require("../../../model/storeSchema");

const editStoreController = async (req, res) => {
  try {
    // Extract categoryId from the request body
    const { id, storeName } = req.body;
    // console.log("Request Body:", req.body);

    // Convert the category name to lowercase for a case-insensitive search
    const lowercaseName = storeName.toLowerCase();

    const existingStore = await EditStore.findOne({ storeName: lowercaseName });

    if (existingStore) {
      return res.status(200).send("Store Already Exists");
    } else {
      // Find the category by id and update its name
      await EditStore.findByIdAndUpdate({ _id: id }, { storeName: lowercaseName });

      // Send a success response
      res.status(200).send({ success: "Product edit successfully!" });
    }
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error editing Product:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = editStoreController;
