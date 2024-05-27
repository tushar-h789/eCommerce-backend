const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema for the 'Variant' model
const variantSchema = new Schema({
  name: {
    type: String, // Name of the variant
    required: true, // Name is required
  },
  image: {
    type: String, // Path to the variant image
    required: true, // Image is required
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the Product model
    ref: "Product",
    required: true, // Product ID is required
  },
  regularprice: {
    type: Number, // Regular price of the variant
    required: true, // Regular price is required
  },
  salesprice: {
    type: Number, // Sales price of the variant (if applicable)
  },
  quantity: {
    type: Number, // Quantity of the variant available
    required: true, // Quantity is required
  },
});

// Create and export the 'Variant' model based on the schema
module.exports = mongoose.model("Variant", variantSchema);
