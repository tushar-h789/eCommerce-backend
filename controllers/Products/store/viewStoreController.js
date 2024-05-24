const Store = require("../../../model/storeSchema");
const viewStoreController = async (req, res) => {
  let data = await Store.find({});
  res.send(data);
};

module.exports = viewStoreController;
