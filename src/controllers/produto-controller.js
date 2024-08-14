const produtosModel = require("../models/produto-Model")


async function getAllProdutos(req, res) {
    try {
        var produtos = await produtosModel.getAllProdutosModel()
    } catch (error) {
        return res.status(400).send(error.message)
    }

    return res.send(produtos)
}

async function getProdutosById(req, res) {
    const { id } = req.params;
    try {
        var produto = await produtosModel.getProdutosByIdModel(id)

    } catch (error) {
        return res.send(error.message).status(400)

    }

    return res.send(produto)
}


async function InsertProdutos(req, res) {
    const {
        nome,
        preco,
        categoria
    } = req.body
    try {
        await produtosModel.insertProdutosModel(
            nome,
            preco,
            categoria
        )
    } catch (error) {
        return res.send(error.message).status(400)
    }


    res.status(201).send("Produto Inserido com sucesso")
}

async function updateProdutos(req, res) {
    const { id } = req.params
    const { nome, preco, categoria } = req.body
    try {
        await produtosModel.updateProdutosModel(id, nome, preco, categoria)
    } catch (error) {
        return res.send(error.message).status(400)
    }
    return res.send("Produto atualizado com sucesso")
}

async function deleteProdutos(req, res) {
    const { id } = req.params
    try {
        await produtosModel.deleteProdutoModel(id)
    } catch (error) {
        return res.send(error.message).status(400)
    }
    return res.send("Produto deletado com sucesso")
}

module.exports = {
    getAllProdutos,
    getProdutosById,
    InsertProdutos,
    updateProdutos,
    deleteProdutos
}