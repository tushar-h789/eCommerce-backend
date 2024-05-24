const Products = require("../../../model/productSchema");

const createProductsController = (req, res) => {
  const {
    name,
    description,
    variantsId,
    regularprice,
    salesprice,
    quantity,
    subcategory,
  } = req.body;
  console.log("Ami Output",name, variantsId);

  //   res.send(`/uploads/${req.file.filename}`);

  const product = new Products({
    name: name,
    description: description,
    variantsId: variantsId,
    image: `/uploads/${req.file.filename}`,
    regularprice: regularprice,
    salesprice: salesprice,
    quantity: quantity,
    subcategory: subcategory,
  });
  product.save();

  res.send({ success: "product created" });
  console.log(product);
};

module.exports = createProductsController;
