const express = require("express");
const createSubcategoryController = require("../../../controllers/Products/subCategory/createSubCategoryController");
const createCategoryController = require("../../../controllers/Products/category/createCategoryController");
const showCategoryController = require("../../../controllers/Products/category/showCategoryController");
const showSubCategoryController = require("../../../controllers/Products/subCategory/showSubCategoryController");
const deleteCategoryController = require("../../../controllers/Products/category/deleteCategoryController");
const editCategoryController = require("../../../controllers/Products/category/editCategoryController");
const router = express.Router();

// category api
router.post("/createcategory", createCategoryController);
router.get("/allcategory", showCategoryController);
router.delete("/deletecategory", deleteCategoryController);
router.post("/editcategory", editCategoryController);

// subCategory api
router.get("/allsubcategory", showSubCategoryController);
router.post("/createsubcategory", createSubcategoryController);

module.exports = router;
