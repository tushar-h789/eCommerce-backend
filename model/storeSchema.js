const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema for the 'Store' model
const storeSchema = new Schema({
  storeName: {
    type: String, // Name of the store
    // required: true, // Store name is required
  },
  tradeNumber: {
    type: String, // Trade number of the store
    // required: true, // Trade number is required
  },
  nidNumber: {
    type: String, // National ID number of the store owner
    // required: true, // NID number is required
  },
  ownerId: [
    {
      type: mongoose.Schema.Types.ObjectId, // Reference to the User model
      ref: "User",
      required: true, // Owner ID is required
    },
  ],
});

// Logging the store schema for debugging purposes (optional)
console.log("storeSchema:", storeSchema);

// Create and export the 'Store' model based on the schema
module.exports = mongoose.model("Store", storeSchema);
