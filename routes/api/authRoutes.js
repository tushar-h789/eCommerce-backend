const express = require("express");
const router = express.Router();

const registrationController = require("../../controllers/registrationController");
const otpController = require("../../controllers/otpController");
const loginController = require("../../controllers/loginController");
const forgotPasswordController = require("../../controllers/fotgotPasswordController");
const changePasswordController = require("../../controllers/changePasswordController");
const userListController = require("../../controllers/userListController");
const userStatusController = require("../../controllers/Products/userStatusController");

// Routes
router.post("/registration", registrationController);
router.post("/otpverify", otpController);
router.post("/login", loginController);
router.post("/forgotpassword", forgotPasswordController);
router.post("/changepassword", changePasswordController);
router.get("/userlist", userListController);

router.post("/statuschange", userStatusController);

module.exports = router;
