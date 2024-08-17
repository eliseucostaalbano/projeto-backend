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

async function  statusPorId(id) {
    const status = await connection.query(`
       SELECT status from mesas
        WHERE id = ${id}
    `)

    return status.rows[0];
}

async function inserirItemPedidoModel(quantidade, id_mesa, id_produto) {
    await connection.query(`
        INSERT INTO itenspedidos(quantidade, id_mesa, id_produto)
        VALUES (${quantidade}, ${id_mesa}, ${id_produto})
    `)
    return;
}

async function deletaItemPedidoModel(id) {
    await connection.query(`
        DELETE FROM itenspedidos WHERE id = ${id}
    `)
    return;
}

async function listarPedidosModel() {
    const pedidos = await connection.query(`
        SELECT * FROM pedidos
        ORDER By criado_em DESC;
    `)

    return pedidos.rows[0];
}

module.exports = {
    criarPedidoModel,
    atualizaStatusMesa,
    statusPorId,
    inserirItemPedidoModel,
    deletaItemPedidoModel,
    listarPedidosModel
}