const Products = require("../../../model/productSchema");

const createProductsController = (req, res) => {
  const {
    name,
    description,
    // variantsId,
    // subCategoryData,
    regularprice,
    salesprice,
    quantity,
  } = req.body;

  // name: values.name,
  // description: description,
  // avatar: image,
  // regularprice: values.regularprice,
  // salesprice: values.salesprice,
  // quantity: values.quantity,
  // subCategoryData: subCategoryData,

  console.log("Ami Output",name);

  //   res.send(`/uploads/${req.file.filename}`);

  const product = new Products({
    name: name,
    description: description,
    // variantsId: variantsId,
    image: `/uploads/${req.file.filename}`,
    regularprice: regularprice,
    salesprice: salesprice,
    quantity: quantity,
    // subCategoryData: subCategoryData,
  });

  console.log("aaaaaaaaaaaaaa",product);
  product.save();

  res.send({ success: "product created" });
};

module.exports = createProductsController;
