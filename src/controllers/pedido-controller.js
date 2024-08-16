const pedidoModel = require("../models/pedido-Models");

async function criarPedido(req,res){
    const {id_usuario, id_mesa} = req.body;

    try {
       await pedidoModel.atualizaStatusMesa(id_mesa)
       await pedidoModel.criarPedidoModel(id_usuario,id_mesa)
    } catch (error) {
        return res.status(400).send(error)
    }

    return res.status(201).send("Pedido criado!");
}

module.exports = {
    criarPedido
}