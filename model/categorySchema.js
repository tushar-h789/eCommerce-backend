const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the 'Category' model
const categorySchema = new Schema({
    name: {
        type: String,
        required: true, // Name is required
    },
    isActive: {
        type: Boolean,
        default: false, // Default value for isActive is false
    },
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: "User", // Reference to the User model
    },
    subCategoryId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubCategory", // Reference to the SubCategory model
        }
    ],
});

// Create and export the 'Category' model based on the schema
module.exports = mongoose.model("Category", categorySchema);
