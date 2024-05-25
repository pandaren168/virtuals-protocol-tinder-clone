const express = require("express");
const userRecommendationsHandler = require("./userRecommendationsHandler");

const router = express.Router();

router.use("/recommendations", userRecommendationsHandler);

module.exports = router;
