const mongoose = require("mongoose");

const { Schema } = mongoose;

// const variantValueSchema = new Schema({
//   name: String,
//   stock: Number,
// });

// const variantSchema = new Schema({
//   name: String,
//   value: [variantValueSchema],
// });

const productSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  regularprice: {
    type: Number,
  },
  salesprice: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  // variantsId: { type: mongoose.Schema.Types.ObjectId, ref: "Variant" },
  // variantsId: { type: mongoose.Types.ObjectId, ref: "Variant" },
  subCategoryId: {
    type: mongoose.Types.ObjectId,
    ref: "SubCategory",
  },
});

module.exports = mongoose.model("Product", productSchema);
