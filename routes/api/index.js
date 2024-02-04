const express = require("express");
const _ = express.Router();
const authRoutes = require('./authRoutes')

//auth routes setup
_.use('/auth', authRoutes)

module.exports = _;
