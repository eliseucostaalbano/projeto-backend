const app = require('./app');
const dotEnv = require('dotenv');
dotEnv.config();

const port = 4000;

app.listen(port, () => {
    console.log(`Servidor está rodando no http://localhost:${port}`);
})