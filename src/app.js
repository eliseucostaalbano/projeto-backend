const express = require('express');
const app = express();
const usuarioRotas = require("./routers/usuario-Routers");
const produtoRotas = require("./routers/produto-Router")
app.use(express.json());

app.use(usuarioRotas);

app.use(produtoRotas);


module.exports = app;