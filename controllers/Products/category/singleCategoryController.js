const subCategory = require("../../../model/subCategorySchema");

const singleCategoryController = async ( req, res ) => {
  try {
    // Extract categoryId from the request body
    const { slug } = req.query;
    
    // Find the category by id and update its name
    const data = await subCategory.find({categoryId: slug});
    // console.log("dataaaaaaaaa", data);

    // Send a success response
    res.send(data);
  } catch (error) {
    // Handle any unexpected errors and send a 500 response
    console.error("Error editing category:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = singleCategoryController;
