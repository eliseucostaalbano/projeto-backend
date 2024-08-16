const express = require('express');
const router = express.Router();

const mesasMiddleware = require('../middlewares/mesas-Middleware')
const mesasController = require('../controllers/mesas-controller')
const validadorMiddleware = require('../middlewares/validador-middleware')


router.get('/mesas',validadorMiddleware.validateTokenMiddleware ,mesasController.getAllMesas)
router.get('/mesas/:id',validadorMiddleware.validateTokenMiddleware ,mesasMiddleware.middleWareGetMesasBYId, mesasController.getMesasById)
router.post('/mesas',validadorMiddleware.validateTokenMiddleware ,mesasMiddleware.insertMesasMiddlleWare , mesasController.insertMesas)
router.put('/mesas/:id',validadorMiddleware.validateTokenMiddleware ,mesasMiddleware.middlewareUpadateMesas, mesasController.updateMesas)
router.delete('/mesas/:id',validadorMiddleware.validateTokenMiddleware ,mesasMiddleware.middlewareDeleteMesas , mesasController.deleteMesas)

module.exports = router
