const express = require("express");
const userHostingRegistrationHandler = require("./userHostingRegistrationHandler");

const router = express.Router();

router.use("/register", userHostingRegistrationHandler);

module.exports = router;
