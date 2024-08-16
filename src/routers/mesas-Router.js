const express = require('express');
const router = express.Router();

const mesasMiddleware = require('../middlewares/mesas-Middleware')
const mesasController = require('../controllers/mesas-controller')
const validadorMiddleware = require('../middlewares/validador-middleware')

router.get('/mesas', mesasController.getAllMesas)
router.get('/mesas/:id', mesasMiddleware.middleWareGetMesasBYId, mesasController.getMesasById)
router.post('/mesas' , mesasMiddleware.insertMesasMiddlleWare , mesasController.insertMesas)
router.put('/mesas/:id',mesasMiddleware.middlewareUpadateMesas, mesasController.updateMesas)
router.delete('')

module.exports = router