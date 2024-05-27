const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema for the 'SubCategory' model
const subCategorySchema = new Schema({
  name: {
    type: String, // Name of the sub-category
    required: true, // Name is required
  },
  isActive: {
    type: Boolean, // Status of the sub-category
    default: false, // Default value is false
  },
  categoryId: {
    type: mongoose.Types.ObjectId, // Reference to the Category model
    ref: "Category",
    required: true, // categoryId is required
  },
});

// Create and export the 'SubCategory' model based on the schema
module.exports = mongoose.model("SubCategory", subCategorySchema);
