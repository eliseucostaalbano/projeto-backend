const connection = require('./connection');

async function insertUserModel(nome, email, senha) {
    await connection.query(`INSERT INTO usuarios (nome, email, senha) VALUES (
        '${nome}',
        '${email}',
        '${senha}'
    )`)
    return;
}

async function getAllusuariosModel() {
    const usuarios = await connection.query(`
        SELECT nome, email FROM usuarios
        ORDER BY id
    `)

    return usuarios.rows;
}

async function getUsuarioByIdModel(id) {
    const usuario = await connection.query(`
        SELECT * FROM usuarios
        WHERE id = ${id}
    `)

    return usuario.rows[0];
}

async function getDetalhesUsuarioById(id) {
    const usuario = await connection.query(`
    SELECT nome, email FROM usuarios
    WHERE id = ${id}
    `)

    return usuario.rows[0];
}


async function updateUser(campo, valor, id) {
    await connection.query(`
        UPDATE usuarios
        SET ${campo} = '${valor}'
        WHERE id = ${id}
    `)

    return;
}

async function deleteUserByIdModel(id) {
    await connection.query(
        `DELETE FROM usuarios WHERE id = ${id}`
    )

    return;
}


module.exports = {
    insertUserModel,
    updateUser,
    getUsuarioByIdModel,
    deleteUserByIdModel,
    getAllusuariosModel,
    getDetalhesUsuarioById
}