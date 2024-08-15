const express = require('express');
const router = express.Router();

const categoriasController = require('../controllers/categorias-controller');
const categoriasMiddleware = require('../middlewares/categoria-Middleware')
//const validadorMiddleware = require('../middlewares/validador-middleware')

router.get('/categorias',
    categoriasController.getAllCategorias);

router.get('/categorias/:id',categoriasMiddleware.getCategoriaByIdMiddleware,
     categoriasController.getCategoriaById);  

router.post('/categorias',categoriasMiddleware.insertNovaCategoriaMiddleware,
     categoriasController.insertNovaCategoria);

router.put('/categorias/:nome',categoriasMiddleware.updateCategoriaMiddleware,
     categoriasController.updateCategoria);

router.delete('/categorias/:id',categoriasMiddleware.deleteCategoriaMiddleware,
     categoriasController.deleteCategoria);

     module.exports = router