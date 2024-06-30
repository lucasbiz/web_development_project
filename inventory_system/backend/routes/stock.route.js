const express = require('express');
const router = express.Router();
const Stock = require('../models/stock.model');
const Item = require('../models/items.model');
const mongoose = require("mongoose");


// POST para adicionar item ao estoque
router.post('/', async (req, res) => {
    const { itemId, quantity } = req.body; // Extrai itemId e quantity do corpo da requisição

    try {
        // Verifica se o item já existe no estoque
        let stockItem = await Stock.findOne({ item: itemId });

        if (!stockItem) {
            // Se o item não estiver no estoque, verifica se ele existe na coleção de itens
            const item = await Item.findById(itemId);

            if (!item) {
                // Se o item não for encontrado, retorna um erro 404
                return res.status(404).json({ message: 'Item not found' });
            }

            // Cria um novo item no estoque
            stockItem = new Stock({
                item: itemId,
                quantity: quantity
            });

            // Salva o novo item no estoque
            await stockItem.save();
        } else {
            // Se o item já existir no estoque, atualiza a quantidade
            stockItem.quantity += quantity;
            await stockItem.save();
        }

        // Retorna o item do estoque atualizado ou criado com sucesso
        res.status(201).json(stockItem);
    } catch (error) {
        // Em caso de erro, retorna uma resposta 400 com a mensagem de erro
        res.status(400).json({ message: error.message });
    }
});

// Atualiza um item existente no estoque pelo ID
router.patch("/:id", async (req, res) => {
    try {
        // Atualiza o item no estoque com os dados fornecidos e retorna o item atualizado
        const updatedItem = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            // Se o item não for encontrado, retorna um erro 404
            return res.status(404).json({ message: "Item not found" });
        }
        // Retorna o item atualizado
        res.json(updatedItem);
    } catch (err) {
        // Em caso de erro, retorna uma resposta 400 com a mensagem de erro
        res.status(400).json({ message: err.message });
    }
});

// Remove um item do estoque pelo ID
router.delete("/:id", async (req, res) => {
    try {
        // Remove o item do estoque pelo ID
        const item = await Stock.findByIdAndDelete(req.params.id);
        if (!item) {
            // Se o item não for encontrado, retorna um erro 404
            return res.status(404).json({ message: "Item not found" });
        }
        // Retorna uma mensagem de sucesso
        res.json({ message: "Item deleted successfully" });
    } catch (err) {
        // Em caso de erro, retorna uma resposta 500 com a mensagem de erro
        res.status(500).json({ message: err.message });
    }
});

// Lista todos os itens do estoque
router.get("/stock", async (req, res) => {
    try {
        // Agrega os dados do estoque e dos itens correspondentes
        const itemsInStock = await Stock.aggregate([
            {
                $lookup: {
                    from: 'items',
                    localField: 'item',
                    foreignField: '_id',
                    as: 'itemDetails'
                }
            },
            {
                $unwind: '$itemDetails'
            },
            {
                $project: {
                    'itemDetails.name': 1,
                    'itemDetails.sell_price': 1,
                    'itemDetails.buy_price': 1,
                    'quantity': 1
                }
            }
        ]);

        // Retorna a lista de itens no estoque
        res.json(itemsInStock);
    } catch (err) {
        // Em caso de erro, retorna uma resposta 500 com a mensagem de erro
        res.status(500).json({ message: err.message });
    }
});

// Busca um item do estoque pelo ID
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id; // Acessa o ID do item a partir do parâmetro de rota
        const stockItem = await Stock.findOne({ item: id }); // Busca o item no estoque pelo ID do item
        if (!stockItem) {
            // Se o item não for encontrado no estoque, retorna um erro 404
            return res.status(404).json({ message: "Item not found in stock" });
        }
        // Retorna os detalhes do item no estoque como resposta
        res.json(stockItem);
    } catch (err) {
        // Em caso de erro, retorna uma resposta 500 com a mensagem de erro
        res.status(500).json({ message: err.message });
    }
});

// Exporta o modulo para que possa ser usado em outras partes da aplicação
module.exports = router;