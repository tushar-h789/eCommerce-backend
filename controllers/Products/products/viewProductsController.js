const Product = require("../../../model/productSchema");

let viewProductsController = async (req, res) => {
  let data = await Product.find({}).populate({
    path: "subCategoryId",
  });
  res.send(data);
};

module.exports = viewProductsController;
