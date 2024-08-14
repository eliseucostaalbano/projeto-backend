const usuarioModel = require("../models/usuario-Models")

async function getDetalhesUsuarioByIdMiddleware(req, res, next){
    const {id} = req.params;
    const usuario = await usuarioModel.getDetalhesUsuarioById(id);

    //middleware
    if(!usuario){
        return res.status(404).send("Usuário não encontrado");
    }

    next();
}

async function insertUserMiddleware(req, res, next){
    const { nome, email, senha } = req.body;

    if(!nome || !email || !senha){
        return res.status(400).send("Dados inválidos");
    }

    if(senha.length < 6){
        return res.status(400).send("A senha deve ter pelo menos 6 digitos");
    }

    if(!email.includes('@') || !email.includes('.')) {
        return res.status(400).send("Email inválido");
    }

    next();
}

async function updateUsuarioMiddleware(req, res, next){
    const { campo, valor } = req.body;
    const {id} = req.params;

    const usuario = await usuarioModel.getUsuarioByIdModel(id);

    if(!usuario) {
        return res.status(400).send("Usuário inválido!");
    }

    if(!campo || !valor){
        return res.status(400).send("Dados incompletos!");
    }

    next();
}

async function deleteUsuarioMiddleware(req, res, next){
    const {id} = req.params;

    if(!id){
        return res.status(400).send("Dados incompletos");
    }

    const user = await usuarioModel.getUsuarioByIdModel(id)

    if(!user){
        return res.status(404).send("Usuário não encontrado");
    }

    next();
}





module.exports = {
    insertUserMiddleware,
    updateUsuarioMiddleware,
    deleteUsuarioMiddleware,
    getDetalhesUsuarioByIdMiddleware
}