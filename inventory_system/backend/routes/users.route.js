const express = require('express');
const router = express.Router();
const User = require('../models/users.model');

// Rota GET para obter todos os usuários
router.get('/', async (req, res) => {
    try {
        // Busca todos os usuários no banco de dados
        const users = await User.find();
        // Retorna a lista de usuários
        res.json(users);
    } catch (err) {
        // Em caso de erro, retorna uma resposta 500 com a mensagem de erro
        res.status(500).json({ message: err.message });
    }
});

// Rota GET para obter um usuário pelo ID
router.get('/:id', async (req, res) => {
    try {
        // Busca o usuário pelo ID
        const user = await User.findById(req.params.id);
        if (user == null) {
            // Se o usuário não for encontrado, retorna um erro 404
            return res.status(404).json({ message: 'Cannot find user' });
        }
        // Retorna o usuário encontrado
        res.json(user);
    } catch (err) {
        // Em caso de erro, retorna uma resposta 500 com a mensagem de erro
        res.status(500).json({ message: err.message });
    }
});

// Rota POST para criar um novo usuário
router.post('/', async (req, res) => {
    console.log('Request Body:', req.body); // Exibe o corpo da requisição no console
    // Cria uma nova instância do modelo User com os dados fornecidos
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        // Salva o novo usuário no banco de dados
        const newUser = await user.save();
        // Retorna o novo usuário criado com status 201
        res.status(201).json(newUser);
    } catch (err) {
        console.log("F"); // Exibe "F" no console em caso de erro
        // Em caso de erro, retorna uma resposta 400 com a mensagem de erro
        res.status(400).json({ message: err.message });
    }
});

// Rota PATCH para atualizar um usuário pelo ID
router.patch('/:id', async (req, res) => {
    try {
        // Busca o usuário pelo ID
        const user = await User.findById(req.params.id);
        if (user == null) {
            // Se o usuário não for encontrado, retorna um erro 404
            return res.status(404).json({ message: 'Cannot find user' });
        }

        // Atualiza os campos do usuário se os novos valores forem fornecidos
        if (req.body.name != null) {
            user.name = req.body.name;
        }
        if (req.body.email != null) {
            user.email = req.body.email;
        }
        if (req.body.password != null) {
            user.password = req.body.password;
        }

        // Salva o usuário atualizado no banco de dados
        const updatedUser = await user.save();
        // Retorna o usuário atualizado
        res.json(updatedUser);
    } catch (err) {
        // Em caso de erro, retorna uma resposta 400 com a mensagem de erro
        res.status(400).json({ message: err.message });
    }
});

// Rota DELETE para deletar um usuário pelo ID
router.delete('/:id', async (req, res) => {
    try {
        // Busca o usuário pelo ID
        const user = await User.findById(req.params.id);
        if (user == null) {
            // Se o usuário não for encontrado, retorna um erro 404
            return res.status(404).json({ message: 'Cannot find user' });
        }

        // Remove o usuário do banco de dados
        await user.remove();
        // Retorna uma mensagem de sucesso
        res.json({ message: 'User deleted' });
    } catch (err) {
        // Em caso de erro, retorna uma resposta 500 com a mensagem de erro
        res.status(500).json({ message: err.message });
    }
});

// Exporta o modulo para que possa ser usado em outras partes da aplicação
module.exports = router;
