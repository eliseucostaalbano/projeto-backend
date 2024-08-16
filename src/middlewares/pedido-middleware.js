async function criarPedidoMiddleware(req, res, next){
    const {id_usuario, id_mesa} = req.body;

    if(!id_usuario || !id_mesa){
        return res.status(404).send("Dados incorretos");
    }

    next();
}

module.exports = {
    criarPedidoMiddleware
}