const express = require("express");

const router = express.Router();

const dashboardController = require("../controllers/dashboardController");

// ==============================
// RESUMO DO DASHBOARD
// ==============================
router.get("/resumo", dashboardController.resumo);

module.exports = router;