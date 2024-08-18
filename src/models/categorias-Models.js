const connection = require('./connection')

async function getAllCategoriasModel(){
    const categorias =  await connection.query(
        `SELECT * FROM categorias`
    )
    return categorias.rows;
      
}

async function getCategoriaByIdModel(id){
    const categorias =  await connection.query(
        `SELECT * FROM categorias WHERE id = ${id}`
    )
    return categorias.rows[0];
}

async function getCategoriaByNameModel(nome){
    const categorias = await connection.query(
        `SELECT * FROM categorias WHERE nome_categoria LIKE '${nome}'`
    )
    return categorias.rows[0];

}

async function insertNovaCategoriaModel(nome_categoria) {
    await connection.query(

        `INSERT INTO categorias(nome_categoria) 
        VALUES('${nome_categoria}'
    )`
        
    )
    return;
    
}

async function updateCategoriaModel(nome_categoria,id){
    await connection.query(
        ` UPDATE categorias SET nome_categoria = '${nome_categoria}'
        WHERE id = ${id}
        `
    )
    return;
 
}

async function deleteCategoriaModel(id) {
    await connection.query(
        `DELETE FROM categorias WHERE id = ${id}`
    )
    return;
}

module.exports ={
    getAllCategoriasModel,
    getCategoriaByIdModel,
    getCategoriaByNameModel,
    insertNovaCategoriaModel,
    updateCategoriaModel,
    deleteCategoriaModel
}