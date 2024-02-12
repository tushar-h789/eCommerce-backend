const express = require('express');
const categoryController = require('../../../controllers/Products/categoryController');
const allCategoryController = require('../../../controllers/Products/allCategoryController');
const router = express.Router()

router.post('/createcategory', categoryController)
router.get('/allcategory', allCategoryController)

module.exports = router