const connection = require('./connection');

async function criarPedidoModel( id_usuario, id_mesa){
    await connection.query(`
        INSERT INTO pedidos (id_usuario, id_mesa) 
        VALUES (${id_usuario}, ${id_mesa})
    `)

    return;
}

async function pegaPedidoPeloIdModel(id) {
    const pedido = await connection.query(`
        SELECT * FROM pedidos
        WHERE id = ${id}
    `)

    return pedido.rows[0];
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

async function inserirItemPedidoModel(quantidade, id_pedido, id_produto) {
    await connection.query(`
        INSERT INTO itenspedidos(quantidade, id_pedido, id_produto)
        VALUES (${quantidade}, ${id_pedido}, ${id_produto})
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

    return pedidos.rows;
}

async function detalhespedidoModel(id) {
    const detalhesPedido = await connection.query(`
        SELECT * FROM itenspedidos ip
        INNER JOIN pedidos pe ON pe.id = ip.id_pedido
        INNER JOIN produtos pro ON pro.id = ip.id_produto
        WHERE ip.id_pedido = ${id}
    `)

    console.log(detalhesPedido.rows)

    return detalhesPedido.rows;
}

async function totalPedidoModel(id) {
    const resultado = await connection.query(`
        SELECT SUM(cast(pr.preco AS DECIMAL(10, 2)) * ip.quantidade) AS total_pedido
        FROM itenspedidos ip
        JOIN pedidos pe ON pe.id = ip.id_pedido
        JOIN produtos pr ON pr.id = ip.id_produto
        WHERE ip.id_pedido = ${id}
    `);

    return resultado.rows[0].total_pedido;
}

async function finalizaPedidoModel(id) {
    await connection.query(`
        UPDATE mesas
        SET status = false
        WHERE id = ${id}
    `)

    return;
}

async function deletaPedidoModel(id) {
     await connection.query(`
        DELETE FROM pedidos
        WHERE id=${id}
    `)
    return;
}

module.exports = {
    criarPedidoModel,
    atualizaStatusMesa,
    statusPorId,
    inserirItemPedidoModel,
    deletaItemPedidoModel,
    listarPedidosModel,
    detalhespedidoModel,
    finalizaPedidoModel,
    deletaPedidoModel,
    pegaPedidoPeloIdModel,
    totalPedidoModel
}