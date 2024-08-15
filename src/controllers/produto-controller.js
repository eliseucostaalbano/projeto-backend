const produtosModel = require("../models/produtoModel")


 async function getAllProdutos(req, res) {

     const produtos = await produtosModel.getAllProdutosModel()
    
   return  res.send(produtos)
}


async function getProdutosById(req, res) {
    const { id } = req.params;
    const produto = await produtosModel.getProdutosByIdModel(id)

    return res.send(produto)
}


async function InsertProdutos(req, res) {
    const {
        nome,
        preco,
    } = req.body

  await produtosModel.insertProdutosModel(
        nome,
        preco
  )

    res.status(201).send("Produto Inserido com sucesso")
}

async function updateProdutos(req, res) {
    const { id } = req.params
    const { nome, preco } = req.body

    await produtosModel.updateProdutosModel(id,nome , preco)

    return res.send("Produto atualizado com sucesso")
}

async function deleteProdutos(req, res) {
    const { id } = req.params

    await produtosModel.deleteProdutoModel(id)
             
    return res.send("Produto deletado com sucesso")
}

module.exports = {
    getAllProdutos,
    getProdutosById,
    InsertProdutos,
    updateProdutos,
    deleteProdutos
}