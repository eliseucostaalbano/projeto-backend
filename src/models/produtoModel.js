async function getAllProdutosModel(){
    const produtos = await connection.query(
        'SELECT * FROM produtos'
    )

    return produtos.rows;
}

async function insertProdutosModel(nome, preco) {
    await connection.query(
        `INSERT INTO produtos ( nome, preco) VALUES (
            '${nome}',
            '${preco}'
        )`
    )
    return
}

async function getProdutosByIdModel(id){
    const produtos = await connection.query(
     `SELECT nome,
             preco
             FROM users WHERE id = ${id}`
    )
 
    return produtos.rows[0]
 }

 async function updateProdutosModel(id, nome, preco){
    await connection.query(`
      UPDATE produtos SET  
      nome = ${nome},
      preco = ${preco},
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