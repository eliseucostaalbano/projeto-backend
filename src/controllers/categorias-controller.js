const categoriasModels = require('../models/categorias-Models')

async function getAllCategorias(req, res){

    try {
        const categorias = await categoriasModels.getAllCategoriasModel()
        
    } catch (error) {
        
        return res.send(categorias);
    }
}

async function getCategoriaById(req, res) {
    const {id} = req.params;
    try {
        const categorias = await categoriasModels.getCategoriaByIdModel(id)
        
    } catch (error) {
    return res.send(categorias);
        
    }


}

async function insertNovaCategoria (req, res) {

    const {nome} = req.body;
    try {
        await categoriasModels.insertNovaCategoriaModel(nome)
        
    } catch (error) {
        return res.status(201).send ("Categoria inserida com sucesso");
        
    }

    
}

async function updateCategoria(req, res) {
    const {nome} = req.params;

    try {
        await categoriasModels.updateCategoriaModel(nome);
        
    } catch (error) {
    return res.send("Categoria atualizada com sucesso")
        
    }


    
}

async function deleteCategoria(req, res) {
    const{id} = req.params;

    try {
        await categoriasModels.deleteCategoriaModel(id)
        
    } catch (error) {
        return res.send("Categoria deletada")
        
    }

    
}



module.exports = {
    getAllCategorias,
    getCategoriaById,
    insertNovaCategoria,
    updateCategoria,
    deleteCategoria
}