const mesasModel = require("../models/mesas-Model")

async function getAllMesas(req, res) {
    try {
        var produtos = await mesasModel.getAllMesasModel()
    } catch (error) {
        return res.status(400).send(error.message)
    }

    return res.send(produtos)
}

async function getMesasById(req, res) {
    const { id } = req.params;
    try {
        var mesa = await mesasModel.getMesaByIdModel(id)

        
    } catch (error) {
        return res.send(error.message).status(400)

    }

    return res.send(mesa)
}

async function insertMesas(req, res) {
    const { numeromesa } = req.body
    try {
        await mesasModel.insertMesaModel(numeromesa)
    } catch (error) {
        return res.send(error.message).status(400)
    }


    res.status(201).send("Mesa Inserida com sucesso")
}

async function updateMesas(req, res) {
    const { id } = req.params
    const { numeromesa} = req.body
    try {
        await mesasModel.updateMesaModel(id, numeromesa)
    } catch (error) {
        return res.send(error.message).status(400)
    }
    return res.send("Mesa atualizada com sucesso")
}

async function deleteMesas(req, res) {
    const { id } = req.params
    try {
        await mesasModel.deleteMesaModel(id)
    } catch (error) {
        return res.send(error.message).status(400)
    }
    return res.send("Mesa deletada com sucesso")
}

module.exports = {
    getAllMesas,
    getMesasById,
    insertMesas,
    updateMesas,
    deleteMesas
}