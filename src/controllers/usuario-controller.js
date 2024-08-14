const usuarioModel = require("../models/usuario-Models");
const encryptPassword = require('../helpers/encryptPassword');
// const decryptPassword = require('../helpers/decryptPassword');

async function getAllUsuarios(req, res) {
    const usuarios = await usuarioModel.getAllusuariosModel();

    return res.send(usuarios);
}

async function getUsuarioById(req, res) {
    const { id } = req.params;
    const usuario = await usuarioModel.getDetalhesUsuarioById(id);

    return res.send(usuario);
}

async function createUser(req, res) {
    const { nome, email, senha } = req.body;

    const pass = await encryptPassword(senha);

    // const decrypted = decryptPassword(pass);

    // console.log(decrypted);

    try {
        await usuarioModel.insertUserModel(nome, email, pass);
    } catch (error) {
        return res.status(400).send(error.message);
    }

    return res.status(201).send("Usuário inserido com sucesso!");
}


async function updateUser(req, res) {
    const { campo, valor } = req.body;
    const {id} = req.params

    try {
        await usuarioModel.updateUser(campo, valor, id)
    } catch (error) {
        return res.status(400).send("Erro aqui")
    }

    return res.status(201).send("Usuário inserido com sucesso!");
}

async function deleteUser(req, res) {
    const { id } = req.params;

    try {
        await usuarioModel.deleteUserByIdModel(id);
    } catch (error) {
        return res.status(400).send(error.message);
    }

    return res.status(200).send("Usuário deletado com sucesso");
}

module.exports = {
    getAllUsuarios,
    createUser,
    updateUser,
    deleteUser,
    getUsuarioById
}