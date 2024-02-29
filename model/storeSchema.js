const mongoose = require('mongoose');
const { Schema } = mongoose;

const storeSchema = new Schema({
    storeName: String,
    tradeNumber: String,
    nidNumber: String,
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
})

module.exports = mongoose.model("Store", storeSchema)