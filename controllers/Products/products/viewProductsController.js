const Product = require("../../../model/productSchema");

let viewProductsController = async (req, res) => {
  let data = await Product.find({});
  res.send(data);
};

module.exports = viewProductsController;