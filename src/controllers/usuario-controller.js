const usuarioModel = require("../models/usuario-Models");
const encryptPassword = require('../helpers/encryptPassword');
// const decryptPassword = require('../helpers/decryptPassword');

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

module.exports = {
    createUser
}