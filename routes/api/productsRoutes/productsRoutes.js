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
const createStoreController = require("../../../controllers/Products/store/createStoreController");
const viewStoreController = require("../../../controllers/Products/store/viewStoreController");
const router = express.Router();

const multer = require("multer");
const variantController = require("../../../controllers/Products/products/variantController");
const viewProductsController = require("../../../controllers/Products/products/viewProductsController");
const secureApi = require("../../../middleware/secureApi");
const deleteProductController = require("../../../controllers/Products/products/deleteProductController");
const editProductController = require("../../../controllers/Products/products/editProductController");
const deleteStoreController = require("../../../controllers/Products/store/deleteStoreController");
const editStoreController = require("../../../controllers/Products/store/editStoreController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix+ "-"+ file.originalname);
    console.log(file.fieldname + "-" + uniqueSuffix + "-"+ file.originalname);
  },
});

const upload = multer({ storage: storage });

// category api
router.post("/createcategory", secureApi, createCategoryController);
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
router.get('/viewproducts', viewProductsController)
router.post(
  "/createproducts",
  upload.single("avatar"),
  createProductsController
);
router.post("/eidtproduct", editProductController);
router.delete("/deleteproduct", deleteProductController);

// variant api
router.post(
  "/variant",
  upload.single("avatar"),
  variantController
);

// store api
router.get("/viewstore", viewStoreController);
router.post("/createstore", createStoreController);
router.delete("/deletestore", deleteStoreController);
router.post("/editstore", editStoreController);


module.exports = router;
