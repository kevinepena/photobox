const router = require("express").Router();
const authMgmtRoutes = require('./authMgmt');
const boxRoutes = require('./box');

// authMgmt Routes
router.use("/authMgmt", authMgmtRoutes);

// box routes
router.use("/box", boxRoutes);

module.exports = router;
