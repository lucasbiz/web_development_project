const express = require('express');
const router = express.Router();
const User = require('../models/users.model');
const bcrypt = require('bcrypt');


// Define uma rota POST para criar um novo usuário
router.post('/', async (req, res) => {
    // Extrai name, email e password do corpo da requisição
    const { name, email, password } = req.body;

    try {
        // Verifica se um usuário com o mesmo email já existe no banco de dados
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            // Se o usuário já existir, retorna uma resposta 400 com uma mensagem de erro
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Gera um hash da senha usando bcrypt com um fator de custo de 10
        const hashedPassword = await bcrypt.hash(password, 10);

        // Cria uma nova instância do modelo User com os dados fornecidos e a senha hasheada
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        // Salva o novo usuário no banco de dados
        const savedUser = await newUser.save();
        // Retorna uma resposta 201 com os dados do usuário salvo
        res.status(201).json(savedUser);
    } catch (err) {
        // Em caso de erro, retorna uma resposta 500 com a mensagem de erro
        res.status(500).json({ message: err.message });
    }
});

// Exporta o modulo para que possa ser usado em outras partes da aplicação
module.exports = router;