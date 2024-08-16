
const mesasModel = require('../models/mesas-Model')

async function insertMesasMiddlleWare(req, res, next){
    const { numero} = req.body;

    if(!numero) {
        return res.status(400).send("Dados Inválidos")
    }

    next();
}

async function middleWareGetMesasBYId(req, res, next) {
    const { id } = req.params;
   
    if (!id) {
        return res.status(400).send("Dados não encontrados")
    }

    next()
}

async function middlewareUpadateMesas(req, res, next) {
    const { id } = req.params
    const { numero} = req.body

    if (!id || !numero) {
        return res.status(400).send("Dados incompletos")
    }

    const mesa = await mesasModel.getMesaByIdModel(id)
    if (!mesa) {
        res.status(404).send("Mesa não encontrada")
    }

    next()
}

async function middlewareDeleteMesas(req, res, next){
   const { id } = req.params
   const mesa = await mesasModel.getMesaByIdModel(id)

   if(!id){
    return res.status(400).send("Dados Invalidos")
   }

    if(!mesa){
        return res.status(404).send("Mesa não encontrada ou já deletada")
    }
   next()
}

module.exports = {
    insertMesasMiddlleWare,
    middleWareGetMesasBYId,
    middlewareUpadateMesas,
    middlewareDeleteMesas,
}