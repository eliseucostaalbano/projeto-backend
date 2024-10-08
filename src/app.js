const express = require('express');
const app = express();


const usuarioRotas = require("./routers/usuario-Routers");
const produtoRotas = require("./routers/produto-Router")
const authRota = require("./routers/auth-router");
const mesasRotas = require("./routers/mesas-Router")
const pedidoRota = require("./routers/pedido-router");

const categoriaRotas = require('./routers/categoria-Router')



app.use(express.json());

app.use(usuarioRotas);
app.use(authRota);

app.use(produtoRotas);

app.use(mesasRotas)
app.use(pedidoRota)
app.use(categoriaRotas);

module.exports = app;