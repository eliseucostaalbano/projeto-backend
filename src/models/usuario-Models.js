const connection = require('./connection');

async function insertUserModel(nome, email, senha){
    await connection.query(`INSERT INTO usuarios (nome, email, senha) VALUES (
        '${nome}',
        '${email}',
        '${senha}'
    )`)
    return;
}

module.exports = {
    insertUserModel
}