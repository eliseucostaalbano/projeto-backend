const express = require('express');
const app = express();
const usuarioRotas = require("./routers/usuario-Routers");

app.use(express.json());
app.use(usuarioRotas);



module.exports = app;