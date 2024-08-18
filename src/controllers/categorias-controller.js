const categoriasModels = require('../models/categorias-Models')

async function getAllCategorias(req, res){

    try {
        var categorias = await categoriasModels.getAllCategoriasModel()
        
    } catch (error) {
        return res.status(400).send(error.message)
        
    }
    return res.send(categorias);
}

async function getCategoriaById(req, res) {
    const {id} = req.params;
    try {
        var categorias = await categoriasModels.getCategoriaByIdModel(id)
        
    } catch (error) {
    
        return res.status(400).send(error.message)

    }
    return res.send(categorias);


}

async function insertNovaCategoria (req, res) {

    const {nome} = req.body;
    try {
        await categoriasModels.insertNovaCategoriaModel(nome)
        
    } catch (error) {
        return res.status(400).send(error.message)
        
    }

    return res.status(201).send("Categoria inserida com sucesso");

    
}

async function updateCategoria(req, res) {
    const {id} = req.params;
    const {nome_categoria} = req.body;

    try {
        await categoriasModels.updateCategoriaModel(nome_categoria, id);
        
    } catch (error) {
    return res.status(400).send(error.message)
        
    }

    return res.status(201).send("Categoria atualizada com sucesso")

    
}

async function deleteCategoria(req, res) {
    const{id} = req.params;

    try {
        await categoriasModels.deleteCategoriaModel(id)
        
    } catch (error) {
        return res.status(400).send(error.message)
        
    }
    return res.status(201).send("Categoria deletada com sucesso")

    
}



module.exports = {
    getAllCategorias,
    getCategoriaById,
    insertNovaCategoria,
    updateCategoria,
    deleteCategoria
}