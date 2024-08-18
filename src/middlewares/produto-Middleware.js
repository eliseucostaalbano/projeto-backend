

const produtoModel = require('../models/produto-Model')

async function insertProdutosMiddlleWare(req, res, next){
    const { nome, preco, id_categoria} = req.body;

    if(!nome || !preco || !id_categoria) {
        return res.status(400).send("Dados Inválidos")
    }

    next();
}

async function middleWareGetProdutosBYId(req, res, next) {
    const { id } = req.params;
   
    if (!id) {
        return res.status(400).send("Dados não encontrados")
    }

    next()
}

async function middlewareUpadateProdutos(req, res, next) {
    const { id } = req.params
    const { nome, preco, id_categoria } = req.body

    if (!id || !nome || !preco || !id_categoria) {
        return res.status(400).send("Dados incompletos")
    }

    const produto = await produtoModel.getProdutosByIdModel(id)
    if (!produto) {
        res.status(404).send("Produto não encontrado")
    }

    next()
}

async function middlewareDeleteProdutos(req, res, next){
   const { id } = req.params
   const produto = await produtoModel.getProdutosByIdModel(id)

   if(!id){
    return res.status(400).send("Dados Invalidos")
   }

    if(!produto){
        return res.status(404).send("Produto não encontrado ou já deletado")
    }
   next()
}

module.exports = {
    insertProdutosMiddlleWare,
    middleWareGetProdutosBYId,
    middlewareUpadateProdutos,
    middlewareDeleteProdutos
}