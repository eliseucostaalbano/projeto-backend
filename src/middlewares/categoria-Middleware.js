const categoriasModels = require('../models/categorias-Models')

async function getCategoriaByIdMiddleware(req, res, next){

    const {id} = req.params;
    const categoria = await categoriasModels.getCategoriaByIdModel(id)

    if(!categoria){
        return res.status (404).send("Categoria não encontrada")
    }

    next();
}

async function getCategoriaByNameMiddleware(req, res, next){
    const {nome} = req.body
    const categoria = await categoriasModels.getCategoriaByNameModel(nome)

    if(!categoria){
        return res.status (404).send("Categoria não encontrada")

    }

    next();

}

async function insertNovaCategoriaMiddleware (req, res, next){
    const {nome_categoria} =  req.body
    if(!nome_categoria){
        return res.status (404).send("Dados inválidos")
    }

    const categoria = await categoriasModels.insertNovaCategoriaModel(nome_categoria)

    if(categoria){
        return res.status (404).send("Categoria já cadastrada")

    }
    next();

}

async function updateCategoriaMiddleware (req, res, next){
    const {nome_categoria} = req.params;

    if(!nome_categoria){
        return res.status (404).send("Dados incompletos!")
    }
    const categoria = await categoriasModels.getCategoriaByNameModel(nome_categoria)

    if(!categoria){
        return res.status (404).send("Categoria não encontrada!")


    }
    next();


}

async function deleteCategoriaMiddleware(req, res, next){
    const {id} = req.params;

    if(!id){
        return res.status (400).send("Dados inválidos!")

    }
    const categoria = await categoriasModels.deleteCategoriaModel(id)

    if(!categoria){
        return res.status (400).send("Categoria deletada com sucesso!")

    }
    next();

}


module.exports= {
    getCategoriaByIdMiddleware,
    getCategoriaByNameMiddleware,
    insertNovaCategoriaMiddleware,
    updateCategoriaMiddleware,
    deleteCategoriaMiddleware

}