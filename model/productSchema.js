const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema for the 'Product' model
const productSchema = new Schema({
  name: {
    type: String, // Product name
    required: true, // Name is required
  },
  description: {
    type: String, // Product description
  },
  image: {
    type: String, // Path to product image
  },
  regularprice: {
    type: Number, // Regular price of the product
    required: true, // Regular price is required
  },
  salesprice: {
    type: Number, // Sales price of the product (if applicable)
  },
  quantity: {
    type: Number, // Quantity of the product available
    required: true, // Quantity is required
  },
  variantsId: [
    {
      type: mongoose.Schema.Types.ObjectId, // Reference to the Variant model
      ref: "Variant",
    }
  ],
});

// Create and export the 'Product' model based on the schema
module.exports = mongoose.model("Product", productSchema);
