const Store = require('../../../model/storeSchema');

const createStoreController = async (req, res) => {
  try {
    // Destructure relevant data from the request body
    const { storeName, tradeNumber, nidNumber, ownerId } = req.body;

    // Check if a store with the same storeName or tradeNumber already exists
    const existingStore = await Store.findOne({ $or: [{ storeName }, { tradeNumber }] });
    // console.log(existingStore);

    // Check if nidNumber has more than 13 digits
    if (nidNumber.length > 13) {
      return res.status(400).send("NID Number should have a maximum length of 13 digits");
    }

    if (existingStore) {
      // If the store already exists, send a response indicating it
      return res.status(200).send("Store Name or Trade Number Already Exists");
    } else {
      // Store a new store instance based on the data
      const store = new Store({
        storeName,
        tradeNumber,
        nidNumber,
        ownerId
      });

      // Save the store to the database
      await store.save();

      // Send a success response
      res.status(200).send({ success: "Store created successfully!" });

      // Log the store details for verification (optional)
      console.log(store);
    }
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error creating Store:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = createStoreController;
