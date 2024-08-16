const connection = require('./connection')

async function getAllMesasModel(){
    const categorias =  await connection.query(
        `SELECT * FROM mesas`
    )
    return categorias.rows
      
}

async function getMesaByIdModel(id){
    const categorias =  await connection.query(
        `SELECT * FROM mesas WHERE id = ${id}`
    )
    return categorias.rows[0];
}

async function insertNovaMesaModel(numero) {
    await connection.query(

        `INSERT INTO categorias(numeromesa) 
        VALUES('
        ${numero}'
    )`
        
    )
    return;
    
}

async function updateMesa(id, numero) {
    await connection.query(`
        UPDATE mesas
        SET numeromesa = ${numero}
        WHERE id = ${id}
    `)

    return;
}

async function deleteMesaModel(id){
    await connection.query(`
     DELETE FROM produtos WHERE id = ${id}
    `)
   }

   module.exports ={
    getAllMesasModel,
    getMesaByIdModel,
    insertNovaMesaModel,
    updateMesa,
    deleteMesaModel,
   }