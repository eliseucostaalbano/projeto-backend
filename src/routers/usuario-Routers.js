const express = require('express');
const router = express.Router();
const usuarioMiddleware = require("../middlewares/usuario-Middleware");
const usuarioController = require("../controllers/usuario-controller");
const validadeMiddlware = require("../middlewares/validador-middleware");

router.get("/usuario/:id",
    validadeMiddlware.validateTokenMiddleware,
    usuarioMiddleware.getDetalhesUsuarioByIdMiddleware,
    usuarioController.getUsuarioById
)

router.get(
    "/usuarios",
    validadeMiddlware.validateTokenMiddleware,
    usuarioController.getAllUsuarios  
    )

router.post(
    "/usuario",
    usuarioMiddleware.insertUserMiddleware,
    usuarioController.createUser
)



router.put("/usuario/:id",
    validadeMiddlware.validateTokenMiddleware,
    usuarioMiddleware.updateUsuarioMiddleware,
    usuarioController.updateUser
)

router.delete(
    "/usuario/delete/:id",
    validadeMiddlware.validateTokenMiddleware,
    usuarioMiddleware.deleteUsuarioMiddleware,
    usuarioController.deleteUser
)

module.exports = router;