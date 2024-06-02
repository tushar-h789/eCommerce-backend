const singleProduct = require("../../../model/productSchema");

let singleProductController = async (req, res) => {
  const { singleProductId } = req.params;
  let data = await singleProduct.find({ variantsId: singleProductId });
  res.send(data);
};

module.exports = singleProductController;
