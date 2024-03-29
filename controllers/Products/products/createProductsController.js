const Products = require("../../../model/productSchema");

const createProductsController = (req, res) => {
  const { name, description, variant } = req.body;

//   res.send(`/uploads/${req.file.filename}`);

  const product = new Products({
      name: name,
      description: description,
      variant: variant,
      image: `/uploads/${req.file.filename}`
  })
  product.save()

  res.send({success: "product created"})
  console.log(product);
};

module.exports = createProductsController;
