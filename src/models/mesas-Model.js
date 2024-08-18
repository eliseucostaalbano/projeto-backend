const connection = require('./connection')

async function getAllMesasModel() {
    const categorias = await connection.query(
        `SELECT * FROM mesas
        ORDER By numeromesa ASC`
    )
    return categorias.rows

}

async function getMesaByIdModel(id) {
    const categorias = await connection.query(
        `SELECT * FROM mesas WHERE id = ${id}`
    )
    return categorias.rows[0];
}

async function insertMesaModel(numeromesa) {
    await connection.query(

        `INSERT INTO mesas(numeromesa) 
        VALUES(
        ${numeromesa}
    )`

    )
    return;

}

async function updateMesaModel(id, numero) {
    await connection.query(`
        UPDATE mesas
        SET numeromesa = ${numero}
        WHERE id = ${id}
    `)

    return;
}

async function deleteMesaModel(id) {
    await connection.query(`
     DELETE FROM mesas WHERE id = ${id}
    `)
}

async function pegaMesaPeloNumeroModel(numeromesa) {
    const mesa = await connection.query(`
        SELECT * FROM mesas
        WHERE numeromesa = ${numeromesa}        
   `)

   return mesa.rows[0];
}

module.exports = {
    getAllMesasModel,
    getMesaByIdModel,
    insertMesaModel,
    updateMesaModel,
    deleteMesaModel,
    pegaMesaPeloNumeroModel
}