const express = require("express");
const router = express.Router();

const registrationController = require("../../controllers/registrationController");
const otpController = require("../../controllers/otpController");
const loginController = require("../../controllers/loginController");
const forgotPasswordController = require("../../controllers/fotgotPasswordController");
const changePasswordController = require("../../controllers/changePasswordController");
const userListController = require("../../controllers/userListController");

// Routes
router.post("/registration", registrationController);
router.post("/otpverify", otpController);
router.post("/login", loginController);
router.post("/forgotpassword", forgotPasswordController);
router.post("/changepassword", changePasswordController);
router.get("/userlist", userListController);

module.exports = router;
