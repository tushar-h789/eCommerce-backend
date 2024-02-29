const express = require("express");
const createSubcategoryController = require("../../../controllers/Products/subCategory/createSubCategoryController");
const createCategoryController = require("../../../controllers/Products/category/createCategoryController");
const showCategoryController = require("../../../controllers/Products/category/showCategoryController");
const deleteCategoryController = require("../../../controllers/Products/category/deleteCategoryController");
const editCategoryController = require("../../../controllers/Products/category/editCategoryController");
const viewSubCategoryController = require("../../../controllers/Products/subCategory/viewSubCategoryController");
const deleteSubCategoryController = require("../../../controllers/Products/subCategory/deleteSubCategoryController");
const editSubCategoryController = require("../../../controllers/Products/subCategory/editSubCategoryController");
const approveCategoryController = require("../../../controllers/Products/category/approveCategoryController");
const approveSubCategoryController = require("../../../controllers/Products/subCategory/approveSubCategoryController");
const createProductsController = require("../../../controllers/Products/products/createProductsController");
const router = express.Router();

// category api
router.post("/createcategory", createCategoryController);
router.get("/allcategory", showCategoryController);
router.delete("/deletecategory", deleteCategoryController);
router.post("/editcategory", editCategoryController);
router.post("/approvecategory", approveCategoryController);

// subCategory api
router.get("/viewsubcategory", viewSubCategoryController);
router.post("/createsubcategory", createSubcategoryController);
router.delete("/deletesubcategory", deleteSubCategoryController);
router.post("/editsubcategory", editSubCategoryController);
router.post("/approvesubcategory", approveSubCategoryController);

//products api
router.post("/createproducts", createProductsController);

module.exports = router;
