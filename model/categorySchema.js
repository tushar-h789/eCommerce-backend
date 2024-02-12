const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the 'Category' model
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

// Create and export the 'Category' model based on the schema
module.exports = mongoose.model("Category", categorySchema);
