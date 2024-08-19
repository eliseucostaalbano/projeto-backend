const pedidoModel = require("../models/pedido-Models");
const mesasModel = require("../models/mesas-Model")
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
    const {quantidade, id_pedido, id_produto} = req.body;

    if(!quantidade || !id_pedido  || !id_produto){
        return res.status(404).send("Dados incorretos");
    }

    next();
}

async function pegaPedidoPeloIdMiddleware(req,res,next) {
    const {id} = req.body;

    if(!id) {
        return res.status(404).send("dado inválido!");
    }

    const pedido = await pedidoModel.pegaPedidoPeloIdModel(id);

    if(!pedido){
        return res.status(400).send("Pedido não encontrado!");
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

async function detalhespedidoMiddleware(req, res, next) {
    const {id} = req.params;
    const pedido = await pedidoModel.pegaPedidoPeloIdModel(id)

    if(!id) {
        return res.status(404).send("dado inválido!");
    }

    if(!pedido){
        return res.status(400).send("Mesa não encontrada!");
    }

    next();
}

async function totalPedidoMiddleware(req,res, next) {
    const {id} = req.params;
    const pedido = await pedidoModel.pegaPedidoPeloIdModel(id)

    if(!id) {
        return res.status(404).send("dado inválido!");
    }

    if(!pedido){
        return res.status(400).send("Pedido não encontrado!");
    }

    next()
}

async function finalizaPedidoMiddleware(req,res,next) {
    const {id} = req.params;
    const pedido = await mesasModel.getMesaByIdModel(id)

    if(!id) {
        return res.status(404).send("dado inválido!");
    }

    if(!pedido){
        return res.status(400).send("Mesa não encontrada!");
    }

    next();
}

async function deletaPedidoMiddleware(req,res,next) {
    const {id} = req.params;
    const pedido = await pedidoModel.pegaPedidoPeloIdModel(id);
    if(!id) {
        return res.status(404).send("dado inválido!");
    }

    if(!pedido){
        return res.status(400).send("Pedido não encontrado!");
    }

    next();
}



module.exports = {
    criarPedidoMiddleware,
    inserirItemPedidoMiddleware,
    deletaItemPedidoMiddleware,
    detalhespedidoMiddleware,
    finalizaPedidoMiddleware,
    deletaPedidoMiddleware,
    pegaPedidoPeloIdMiddleware,
    totalPedidoMiddleware
}