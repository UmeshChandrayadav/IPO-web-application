const express = require('express');
const router = express.Router();
const { userAuth } = require('../middleware.js');
const wrapAsync = require("../utils/wrapAsync.js");
// const {validateUser} = require("../middleware.js");

const userController = require("../controller/user.js");

router.post("/register", wrapAsync(userController.register));
router.post("/login", wrapAsync(userController.login));
router.post("/logout", wrapAsync(userController.logout));
router.post("/send-verify-link",userAuth, wrapAsync(userController.sendVerifyLink));
router.post("/verify-email-link",userAuth, wrapAsync(userController.verifyEmail));
router.get("/is-auth",userAuth, wrapAsync(userController.isAuthenticated));
router.post("/send-reset-link", wrapAsync(userController.sendResetPasswordLink));
router.post("/reset-password-link",wrapAsync(userController.resetPassword));
router.get("/google", (userController.googleLogin));
router.get("/google/callback", (userController.googleCallback));
router.get("/data", userAuth, wrapAsync(userController.getUserData));

module.exports = router;