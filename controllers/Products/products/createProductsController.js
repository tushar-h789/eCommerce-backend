const Products = require("../../../model/productSchema");

const createProductsController = async (req, res) => {
  try {
    const {
      name,
      description,
      variant,
      regularprice,
      salesprice,
      quantity,
    } = req.body;

    // Validate required fields
    if (!name || !regularprice || !quantity) {
      return res.status(400).send({ error: "Name, regular price, and quantity are required" });
    }

    // Validate file upload
    if (!req.file || !req.file.filename) {
      return res.status(400).send({ error: "Product image is required" });
    }

    // Create new product instance
    const product = new Products({
      name: name,
      description: description,
      variant: variant,
      image: `/uploads/${req.file.filename}`,
      regularprice: regularprice,
      salesprice: salesprice,
      quantity: quantity,
    });

    // Save the product to the database
    await product.save();

    // Respond with success message
    res.status(201).send({ success: "Product created successfully", product: product });
  } catch (error) {
    // Handle errors
    console.error("Error creating product:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = createProductsController;
