const produtoModel = require('../models/produtoModel')

async function insertProdutosMiddlleWare(req, res, next){
    const { nome, preco} = req.body;

    if(!nome || !preco) {
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
    const { nome, preco } = req.body

    if (!id || !nome || !preco) {
        return res.status(400).send("Dados incompletos")
    }

    const produto = await produtoModelModel.getProdutoByIdModel(id)
    if (!produto) {
        res.status(404).send("Produto não encontrado")
    }

    next()
}

async function middlewareDeleteProdutos(req, res, next){
   const  {id} = req.params
   if(!id){
    return res.status(400).send("Dados Invalidos")
   }
   const produto = await produtoModel.getProdutoByIdModel(id)    
    if(!produto){
        return res.status(404).send("Produto não encontradao ou já deletado")
    }
   next()
}

module.exports = {
    insertProdutosMiddlleWare,
    middleWareGetProdutosBYId,
    middlewareUpadateProdutos,
    middlewareDeleteProdutos
}