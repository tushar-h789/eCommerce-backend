const Variant = require("../../../model/variantSchema");
const Product = require("../../../model/productSchema");

// Controller function for handling variant creation
const variantController = async (req, res) => {
  try {
    // Destructure relevant data from the request body
    const { name, productId, regularprice, salesprice, quantity } = req.body;

    // Validate required fields
    if (!name || !productId || !regularprice || !quantity) {
      return res.status(400).send({ error: "Name, product ID, regular price, and quantity are required" });
    }

    // Validate file upload
    if (!req.file || !req.file.filename) {
      return res.status(400).send({ error: "Variant image is required" });
    }

    // Create a new Variant instance based on the data
    const variant = new Variant({
      name: name,
      productId: productId,
      image: `/uploads/${req.file.filename}`,
      regularprice: regularprice,
      salesprice: salesprice,
      quantity: quantity,
    });

    // Save the variant to the database
    await variant.save();

    // Update the parent product to include the new variant
    await Product.findOneAndUpdate(
      { _id: productId },
      { $push: { variantsId: variant._id } },
      { new: true }
    );

    // Send a success response with the created variant
    res.status(201).send({ success: "Variant created successfully", variant });
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error creating variant:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

// Export the variantController function
module.exports = variantController;
