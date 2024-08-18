const express = require('express');
const router = express.Router();
const validadorMiddleware = require('../middlewares/validador-middleware');
const criarPedidoMiddleware = require("../middlewares/pedido-middleware");
const criarPedidoController = require("../controllers/pedido-controller");

router

router.get("/pedidos",
    validadorMiddleware.validateTokenMiddleware,
    criarPedidoController.listarPedidos
)

router.get(
    "/pedido/detalhes/:id",
    validadorMiddleware.validateTokenMiddleware,
    criarPedidoMiddleware.detalhespedidoMiddleware,
    criarPedidoController.detalhesPedido
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

router.put(
    "/pedido/finalizado/:id",
    validadorMiddleware.validateTokenMiddleware,
    criarPedidoMiddleware.finalizaPedidoMiddleware,
    criarPedidoController.finalizaPedido
)

router.delete(
    "/pedido/remove/:id",
    validadorMiddleware.validateTokenMiddleware,
    criarPedidoMiddleware.deletaItemPedidoMiddleware,
    criarPedidoController.deletaItemPedido
)

router.delete(
    "/pedido/delete/:id",
    validadorMiddleware.validateTokenMiddleware,
    criarPedidoMiddleware.deletaPedidoMiddleware,
    criarPedidoController.deletaPedido
)

module.exports = router