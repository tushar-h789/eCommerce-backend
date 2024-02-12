const express = require("express");
const allCategoryController = require("../../../controllers/Products/category/allCategoryController");
const createSubcategoryController = require("../../../controllers/Products/subCategory/createSubCategoryController");
const categoryController = require("../../../controllers/Products/category/categoryController");
const allSubCategoryController = require("../../../controllers/Products/subCategory/allSubCategoryController");
const router = express.Router();

router.post("/createcategory", categoryController);
router.get("/allcategory", allCategoryController);
router.post("/createsubcategory", createSubcategoryController);
router.get("/allsubcategory", allSubCategoryController);

module.exports = router;
