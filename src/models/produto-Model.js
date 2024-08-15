const connection = require('./connection');

async function getAllProdutosModel(){
    const produtos = await connection.query(
        'SELECT * FROM produtos'
    )

    return produtos.rows;
}

async function insertProdutosModel(nome, preco) {
    await connection.query(
        `INSERT INTO produtos ( nome, preco, id_categoria) VALUES (
            '${nome}',
            '${preco}'
            '${categoria}'
        )`
    )
    return
}

async function getProdutosByIdModel(id){
    const produtos = await connection.query(
     `SELECT nome,
             preco,
             id_categoria
             FROM produtos WHERE id = ${id}`
    )
 
    return produtos.rows[0]
 }

 async function updateProdutosModel(id, nome, preco, id_categoria){
    await connection.query(`
      UPDATE produtos SET  
      nome = ${nome},
      preco = ${preco},
      id_categoria = ${categoria}
      WHERE id = ${id}
    `)
    return;
 
  }

  async function deleteProdutoModel(id){
   await connection.query(`
    DELETE FROM produtos WHERE id = ${id}
   `)
  }

module.exports = {
    getAllProdutosModel,
    insertProdutosModel,
    getProdutosByIdModel,
    updateProdutosModel,
    deleteProdutoModel
}
