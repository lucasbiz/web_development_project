const express = require('express');
const router = express.Router();
const User = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/', async (req, res) => {
    const { user, password } = req.body;

    try {
        // Encontrar o usuário pelo nome ou email
        const foundUser = await User.findOne({
            $or: [{ name: user }, { email: user }]
        });

        if (!foundUser) {
            return res.status(400).json({ msg: 'Usuário não encontrado' });
        }

        // Verificar a senha
        const isMatch = await bcrypt.compare(password, foundUser.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Senha incorreta' });
        }

        // Gerar um token JWT
        const token = jwt.sign({ id: foundUser._id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
});

module.exports = router;
