const express = require('express');
const router = express.Router();
const Subsidiaries = require('../models/subsidiaries.model');

// Rota GET para obter todas as subsidiárias
router.get('/', async (req, res) => {
    try {
        // Busca todas as subsidiárias no banco de dados e popula o campo 'stock'
        const subsidiaries = await Subsidiaries.find().populate('stock');
        // Retorna a lista de subsidiárias
        res.json(subsidiaries);
    } catch (err) {
        // Em caso de erro, retorna uma resposta 500 com a mensagem de erro
        res.status(500).json({ message: err.message });
    }
});

// Rota GET para obter uma subsidiária pelo ID
router.get('/:id', async (req, res) => {
    try {
        // Busca a subsidiária pelo ID e popula o campo 'stock'
        const subsidiary = await Subsidiaries.findById(req.params.id).populate('stock');
        if (subsidiary == null) {
            // Se a subsidiária não for encontrada, retorna um erro 404
            return res.status(404).json({ message: 'Cannot find subsidiary' });
        }
        // Retorna a subsidiária encontrada
        res.json(subsidiary);
    } catch (err) {
        // Em caso de erro, retorna uma resposta 500 com a mensagem de erro
        res.status(500).json({ message: err.message });
    }
});

// Rota POST para criar uma nova subsidiária
router.post('/', async (req, res) => {
    // Cria uma nova instância do modelo Subsidiaries com os dados fornecidos
    const subsidiary = new Subsidiaries({
        name: req.body.name,
        location: req.body.location,
        stock: req.body.stock
    });
    try {
        // Salva a nova subsidiária no banco de dados
        const newSubsidiary = await subsidiary.save();
        // Retorna a nova subsidiária criada com status 201
        res.status(201).json(newSubsidiary);
    } catch (err) {
        // Em caso de erro, retorna uma resposta 400 com a mensagem de erro
        res.status(400).json({ message: err.message });
    }
});

// Rota PATCH para atualizar uma subsidiária pelo ID
router.patch('/:id', async (req, res) => {
    try {
        // Busca a subsidiária pelo ID
        const subsidiary = await Subsidiaries.findById(req.params.id);
        if (subsidiary == null) {
            // Se a subsidiária não for encontrada, retorna um erro 404
            return res.status(404).json({ message: 'Cannot find subsidiary' });
        }

        // Atualiza os campos da subsidiária se os novos valores forem fornecidos
        if (req.body.name != null) {
            subsidiary.name = req.body.name;
        }
        if (req.body.location != null) {
            subsidiary.location = req.body.location;
        }
        if (req.body.stock != null) {
            subsidiary.stock = req.body.stock;
        }

        // Salva a subsidiária atualizada no banco de dados
        const updatedSubsidiary = await subsidiary.save();
        // Retorna a subsidiária atualizada
        res.json(updatedSubsidiary);
    } catch (err) {
        // Em caso de erro, retorna uma resposta 400 com a mensagem de erro
        res.status(400).json({ message: err.message });
    }
});

// Rota DELETE para deletar uma subsidiária pelo ID
router.delete('/:id', async (req, res) => {
    try {
        // Busca a subsidiária pelo ID
        const subsidiary = await Subsidiaries.findById(req.params.id);
        if (subsidiary == null) {
            // Se a subsidiária não for encontrada, retorna um erro 404
            return res.status(404).json({ message: 'Cannot find subsidiary' });
        }

        // Remove a subsidiária do banco de dados
        await subsidiary.remove();
        // Retorna uma mensagem de sucesso
        res.json({ message: 'Subsidiary deleted' });
    } catch (err) {
        // Em caso de erro, retorna uma resposta 500 com a mensagem de erro
        res.status(500).json({ message: err.message });
    }
});

// Exporta o modulo para que possa ser usado em outras partes da aplicação
module.exports = router;
