const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');
const authController = require("../controllers/auth-controller");

router.post(
    '/login',
    authMiddleware.loginMiddleware,
    authController.login
)

module.exports = router;