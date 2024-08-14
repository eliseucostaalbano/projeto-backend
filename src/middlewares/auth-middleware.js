const decryptPassword = require("../helpers/decryptPassword");
const usuarioModel = require("../models/auth-Models")
async function loginMiddleware(req, res, next) {
    const { email, senha } = req.body;
    // console.log(email, password);
    if (!email || !senha) {
        return res.status(400).send("Dados inválidos");
    }

    const user = await usuarioModel.getUserByEmail(email);

    if (!user) {
        return res.status(404).send("Usuário não encontrado");
    }

    const decrypted = await decryptPassword(user.senha);

    if (senha !== decrypted) {
        return res.status(400).send("Senha inválida");
    }

    const data = {
        id: user.id,
        email: user.email
    }

    req.user = data;

    next();

}

module.exports = {
    loginMiddleware
}