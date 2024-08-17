const connection = require('./connection');

async function criarPedidoModel( id_usuario, id_mesa){
    await connection.query(`
        INSERT INTO pedidos (id_usuario, id_mesa) 
        VALUES (${id_usuario}, ${id_mesa})
    `)

    return;
}

async function atualizaStatusMesa(id){
    await connection.query(`
        UPDATE mesas
        SET status = true
        WHERE id = ${id}   
    `)

    return;
}

module.exports = {
    criarPedidoModel,
    atualizaStatusMesa
}