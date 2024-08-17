const express = require('express');
const router = express.Router();
const validadorMiddleware = require('../middlewares/validador-middleware');
const criarPedidoMiddleware = require("../middlewares/pedido-middleware");
const criarPedidoController = require("../controllers/pedido-controller");

router.get("/pedidos",
    validadorMiddleware.validateTokenMiddleware,
    criarPedidoController.listarPedidos
)

router.post(
    "/pedido",
    validadorMiddleware.validateTokenMiddleware,
    criarPedidoMiddleware.criarPedidoMiddleware,
    criarPedidoController.criarPedido
)

router.post(
    "/pedido/adiciona",
    validadorMiddleware.validateTokenMiddleware,
    criarPedidoMiddleware.inserirItemPedidoMiddleware,
    criarPedidoController.inserirItemPedido
)

router.delete(
    "/pedido/remove/:id",
    validadorMiddleware.validateTokenMiddleware,
    criarPedidoMiddleware.deletaItemPedidoMiddleware,
    criarPedidoController.deletaItemPedido
)

module.exports = router