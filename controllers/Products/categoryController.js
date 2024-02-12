const Category = require("../../model/categorySchema");

const categoryController = (req, res) => {
  const { name, ownerId } = req.body;
  const category = new Category({
    name: name,
    ownerId: ownerId,
  });
  category.save();

  console.log(category);
};

module.exports = categoryController;
