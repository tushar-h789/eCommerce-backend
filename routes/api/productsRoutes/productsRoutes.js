const express = require("express");
const createSubcategoryController = require("../../../controllers/Products/subCategory/createSubCategoryController");
const createCategoryController = require("../../../controllers/Products/category/createCategoryController");
const showCategoryController = require("../../../controllers/Products/category/showCategoryController");
const showSubCategoryController = require("../../../controllers/Products/subCategory/showSubCategoryController");
const deleteCategoryController = require("../../../controllers/Products/category/deleteCategoryController");
const router = express.Router();

// category api
router.post("/createcategory", createCategoryController);
router.get("/allcategory", showCategoryController);
router.delete("/deletecategory", deleteCategoryController);

// subCategory api
router.get("/allsubcategory", showSubCategoryController);
router.post("/createsubcategory", createSubcategoryController);

module.exports = router;
