const express = require('express');
const router = express.Router();
const produtoMiddleware = require('../middlewares/produto-Middleware')
const produtoController = require("../controllers/produto-controller");

router.get('/produtos', produtoController.getAllProdutos)
router.get('/produtos/:id', produtoMiddleware.middleWareGetProdutosBYId, produtoController.getProdutosById)
router.post('/produtos', produtoMiddleware.insertProdutosMiddlleWare, produtoController.InsertProdutos)
router.put('/produtos/:id', produtoMiddleware.middlewareUpadateProdutos, produtoController.updateProdutos)
router.delete('/produtos/:id', produtoMiddleware.middlewareDeleteProdutos, produtoController.deleteProdutos)

module.exports = router