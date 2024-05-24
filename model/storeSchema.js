const mongoose = require("mongoose");
const { Schema } = mongoose;

const storeSchema = new Schema({
  storeName: String,
  tradeNumber: String,
  nidNumber: String,
  ownerId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  // [{ type: mongoose.Schema.Types.ObjectId, ref: "Variant" }]
});
console.log("store", storeSchema);
// console.log(ownerId);

module.exports = mongoose.model("Store", storeSchema);
