const express = require("express");
const _ = express.Router();
const authRoutes = require('./authRoutes')
const productsRoutes = require('./productsRoutes/productsRoutes')

//auth routes setup
_.use('/auth', authRoutes)
_.use('/products', productsRoutes)

module.exports = _;
