const pedidoModel = require("../models/pedido-Models");

async function criarPedidoMiddleware(req, res, next){
    const {id_usuario, id_mesa} = req.body;

    if(!id_usuario || !id_mesa){
        return res.status(404).send("Dados incorretos");
    }

    const {status} = await pedidoModel.statusPorId(id_mesa)

    if(status){
        return res.status(400).send("Mesa ocupada!")
    }

    next();
}

async function inserirItemPedidoMiddleware(req, res,next) {
    const {quantidade, id_mesa, id_produto} = req.body;

    if(!quantidade, !id_mesa, !id_produto){
        return res.status(404).send("Dados incorretos");
    }

    next();
}

async function deletaItemPedidoMiddleware(req,res, next) {
    const { id } = req.params;
    const itemProduto = await pedidoModel.deletaItemPedidoModel(id)
    if(!id) {
        return res.status(404).send("dado inválido!");
    }

    if(!itemProduto){
        return res.status(400).send("Item não encontrado ou já deletado!");
    }

    next();
}

async function listarPedidos(params) {
    
}



module.exports = {
    criarPedidoMiddleware,
    inserirItemPedidoMiddleware,
    deletaItemPedidoMiddleware
}