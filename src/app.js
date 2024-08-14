const express = require('express');
const app = express();
const categoriaRota = require('./routers/categoria-Router')

app.use(express.json());
app.use(categoriaRota)




module.exports = app;