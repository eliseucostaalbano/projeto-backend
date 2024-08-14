const express = require('express');
const app = express();
const usuarioRotas = require("./routers/usuario-Routers");
const produtoRotas = require("./routers/produto-Router")
const authRota = require("./routers/auth-router");

app.use(express.json());

app.use(usuarioRotas);
app.use(authRota);

app.use(produtoRotas);


module.exports = app;