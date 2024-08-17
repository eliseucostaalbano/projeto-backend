const express = require('express');
const router = express.Router();

const categoriasController = require('../controllers/categorias-controller');
const categoriasMiddleware = require('../middlewares/categoria-Middleware')
const validadorMiddleware = require('../middlewares/validador-middleware')

router.get('/categorias',validadorMiddleware.validateTokenMiddleware,
    categoriasController.getAllCategorias);

router.get('/categorias/:id',validadorMiddleware.validateTokenMiddleware,categoriasMiddleware.getCategoriaByIdMiddleware,
     categoriasController.getCategoriaById);  

router.post('/categorias',validadorMiddleware.validateTokenMiddleware,categoriasMiddleware.insertNovaCategoriaMiddleware,
     categoriasController.insertNovaCategoria);

router.put('/categorias/:nome',validadorMiddleware.validateTokenMiddleware,categoriasMiddleware.updateCategoriaMiddleware,
     categoriasController.updateCategoria);

router.delete('/categorias/:id',validadorMiddleware.validateTokenMiddleware,categoriasMiddleware.deleteCategoriaMiddleware,
     categoriasController.deleteCategoria);

     module.exports = {router} 