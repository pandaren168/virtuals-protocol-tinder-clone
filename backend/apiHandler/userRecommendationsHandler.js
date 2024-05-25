const express = require("express");
const userRecommendationsService = require("../services/userRecommendations");

const router = express.Router();

router.post("/", async (req, res) => {
    const { id, university, interests } = req.body;
    try {
        const recommendations = await userRecommendationsService.getRecommendations(id, university, interests);

        res.json(recommendations);
    } catch (error) {
        console.error("Error getting recommendations:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
