const Variant = require("../../../model/variantSchema");

const variantController = (req, res) => {
  const { name, productId } = req.body;

  //   res.send(`/uploads/${req.file.filename}`);
  // console.log(req);

  const variant = new Variant({
    name: name,
    productId: productId,
    image: `/uploads/${req.file.filename}`,
  });
  variant.save();

  res.send({ success: "Variant created" });
  console.log(variant);
};

module.exports = variantController;
