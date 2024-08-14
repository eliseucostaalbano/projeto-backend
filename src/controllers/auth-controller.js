const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');
dotEnv.config();

const jwtSecret = process.env.JWT_SECRET;

async function login(req, res) {
    const {id, email} = req.user;
    const token = jwt.sign({ id, email}, jwtSecret, { expiresIn: '1h' });

    return res.send(token);
}

module.exports = {
    login
}