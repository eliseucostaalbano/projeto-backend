const express = require('express');
const router = express.Router();

const mesasMiddleware = require('../middlewares/mesas-Middleware')
const mesasController = require('../controllers/mesas-controller')
const validadorMiddleware = require('../middlewares/validador-middleware')

router.get('/mesas', mesasController.getAllMesas)
//router.put("/mesas/:id", middlewareUpdateStatus, controllerUpdateStatus)