const DeleteCategory = require('../../../model/categorySchema')

const deleteCategoryController = async (req, res) => {
    let { categoryId } = req.body;
    console.log("body",req.body);
  
    try {
      await DeleteCategory.findByIdAndDelete({ _id: categoryId });
      res.send({ success: "Category deleted successfully!" });
    } catch (error) {
      console.error("Error deleting category:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  };
  
  module.exports = deleteCategoryController;
  
