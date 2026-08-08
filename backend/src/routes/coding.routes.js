const express = require("express");

const {
    getCodingStats,
    refreshCodingStats
} = require("../controllers/coding.controller");

const router = express.Router();


router.get(
    "/",
    getCodingStats
);


router.post(
    "/refresh",
    refreshCodingStats
);


module.exports = router;