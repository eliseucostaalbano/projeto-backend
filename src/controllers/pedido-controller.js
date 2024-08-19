const pedidoModel = require("../models/pedido-Models");

async function criarPedido(req, res) {
    const { id_usuario, id_mesa } = req.body;

    try {
        await pedidoModel.atualizaStatusMesa(id_mesa)
        await pedidoModel.criarPedidoModel(id_usuario, id_mesa)
    } catch (error) {
        return res.status(400).send("Mesa inexistente!")
    }

    return res.status(201).send("Pedido criado!");
}

async function inserirItemPedido(req, res) {
    const { quantidade, id_pedido, id_produto } = req.body;

    try {
        await pedidoModel.inserirItemPedidoModel(quantidade, id_pedido, id_produto);
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

async function pegaPedidoPeloId(req, res) {
    const { id } = req.params;

    try {
     var pedido =   await pedidoModel.pegaPedidoPeloIdModel(id)
    } catch (error) {
        return res.status(400).send("Pedido não encontrado!");
    }

    return res.status(201).send(pedido);
}

async function listarPedidos(req, res) {
    try {
        var pedidos = await pedidoModel.listarPedidosModel();
    } catch (error) {
        return res.status(400).send(error);
    }


    return res.send(pedidos);
}

async function detalhesPedido(req, res) {
    const { id } = req.params;

    try {
        var itenspedidos = await pedidoModel.detalhespedidoModel(id);
    } catch (error) {
        
    }
    


    return res.status(200).send(itenspedidos);
}

async function totalPedido(req,res) {
    const {id} = req.params;

    try {
        var detalhesPedido = await pedidoModel.detalhespedidoModel(id)
        var valorTotal = await pedidoModel.totalPedidoModel(id);
        
        var detalhes = {
            itens: detalhesPedido,
            valor: valorTotal
        }

    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(200).send(detalhes)

}

async function finalizaPedido(req, res) {
    const { id } = req.params;

    try {
        await pedidoModel.finalizaPedidoModel(id);
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(200).send("Mesa liberada para uso!")
}

async function deletaPedido(req, res) {
    const { id } = req.params;

    try {
        await pedidoModel.deletaPedidoModel(id);
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(200).send("Pedido deletado!")
}

module.exports = {
    criarPedido,
    inserirItemPedido,
    deletaItemPedido,
    listarPedidos,
    detalhesPedido,
    finalizaPedido,
    deletaPedido,
    pegaPedidoPeloId,
    totalPedido
}