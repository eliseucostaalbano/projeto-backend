const pedidoModel = require("../models/pedido-Models");

async function criarPedido(req,res){
    const {id_usuario, id_mesa} = req.body;

    try {
       await pedidoModel.atualizaStatusMesa(id_mesa)
       await pedidoModel.criarPedidoModel(id_usuario,id_mesa)
    } catch (error) {
        return res.status(400).send("Mesa inexistente!")
    }

    return res.status(201).send("Pedido criado!");
}

async function inserirItemPedido(req,res) {
    const {quantidade, id_mesa, id_produto} = req.body;

    try {
        await pedidoModel.inserirItemPedidoModel(quantidade, id_mesa, id_produto);
    } catch (error) {
        return res
        .status(400)
        .send(error.message);
    }

    return res.status(201).send("Item inserido com sucesso");
}

async function deletaItemPedido(req, res) {
    const { id } = req.params;

    try {
        await pedidoModel.deletaItemPedidoModel(id);
    } catch (error) {
        return res.status(400).send("item não encontrado!");
    }

    return res.status(201).send("Item deletado com sucesso");
}

async function listarPedidos(req, res) {
    try {
        var pedidos = await pedidoModel.listarPedidosModel();
    } catch (error) {
        return res.status(400).send(error);
    }
    

    return res.send(pedidos);
}

module.exports = {
    criarPedido,
    inserirItemPedido,
    deletaItemPedido,
    listarPedidos
}