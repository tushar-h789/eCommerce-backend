const Store = require("../../../model/storeSchema");
const viewStoreController = async (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  const data = await Store.find({ ownerId: id });
  // console.log(data);
  res.send(data)
};

module.exports = viewStoreController;
