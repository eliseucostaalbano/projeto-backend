const express = require('express');
const router = express.Router();
const usuarioMiddleware = require("../middlewares/usuario-Middleware");
const usuarioController = require("../controllers/usuario-controller");
router.post(
    "/usuario",
    usuarioMiddleware.insertUserMiddleware,
    usuarioController.createUser
    )

module.exports = router;