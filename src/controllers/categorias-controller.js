const categoriasModels = require('../models/categorias-Models')

async function getAllCategorias(req, res){
    const categorias = await categoriasModels.getAllCategoriasModel()
    return res.send(categorias);
}

async function getCategoriaById(req, res) {
    const {id} = req.params;
    const categorias = await categoriasModels.getCategoriaByIdModel(id)

    return res.send(categorias);

}

async function insertNovaCategoria (req, res) {
    const {id, nome} = req.body;
    await categoriasModels.insertNovaCategoriaModel(id,nome)

    return res.status(201).send ("Categoria inserida com sucesso");
    
}

async function updateCategoria(req, res) {
    const {nome} = req.params;

    await categoriasModels.updateCategoriaModel(nome);

    return res.send("Categoria atualizada com sucesso")
    
}

async function deleteCategoria(req, res) {
    const{id} = req.params;
    await categoriasModels.deleteCategoriaModel(id)

    return res.send("Categoria deletada")
    
}



module.exports = {
    getAllCategorias,
    getCategoriaById,
    insertNovaCategoria,
    updateCategoria,
    deleteCategoria
}