const express = require('express');
const router = express.Router();
const produtoMiddleware = require('../middlewares/produto-Middleware')
const produtoController = require("../controllers/produto-controller");
const validateMiddleware = require("../middlewares/validador-middleware")

router.get('/produtos',validateMiddleware.validateTokenMiddleware, produtoController.getAllProdutos)
router.get('/produtos/:id' ,validateMiddleware.validateTokenMiddleware, produtoMiddleware.middleWareGetProdutosBYId, produtoController.getProdutosById)
router.post('/produtos' ,validateMiddleware.validateTokenMiddleware, produtoMiddleware.insertProdutosMiddlleWare, produtoController.InsertProdutos)
router.put('/produtos/:id' ,validateMiddleware.validateTokenMiddleware, produtoMiddleware.middlewareUpadateProdutos, produtoController.updateProdutos)
router.delete('/produtos/:id' ,validateMiddleware.validateTokenMiddleware, produtoMiddleware.middlewareDeleteProdutos, produtoController.deleteProdutos)

module.exports = router