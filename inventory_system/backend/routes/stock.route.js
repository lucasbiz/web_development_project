const express = require('express');
const router = express.Router();
const Stock = require('../models/stock.model');
const Item = require('../models/items.model');
const mongoose = require("mongoose");


// POST para adicionar item ao estoque
router.post('/', async (req, res) => {
    const { itemId, quantity } = req.body;

    try {
        let stockItem = await Stock.findOne({ item: itemId });

        if (!stockItem) {
            const item = await Item.findById(itemId);

            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }

            stockItem = new Stock({
                item: itemId,
                quantity: quantity
            });

            await stockItem.save();
        } else {
            stockItem.quantity += quantity;
            await stockItem.save();
        }

        res.status(201).json(stockItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Atualiza um item existente no estoque pelo ID
router.patch("/:id", async (req, res) => {
    try {
        const updatedItem = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Remove um item do estoque pelo ID
router.delete("/:id", async (req, res) => {
    try {
        const item = await Stock.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.json({ message: "Item deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Lista todos os itens do estoque
router.get("/stock", async (req, res) => {
    try {
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

        res.json(itemsInStock);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Busca um item do estoque pelo ID
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id; // Acessa o ID do item a partir do parâmetro de rota
        const stockItem = await Stock.findOne({ item: id }); // Busca o item no estoque pelo ID do item
        if (!stockItem) {
            return res.status(404).json({ message: "Item not found in stock" });
        }
        res.json(stockItem); // Retorna os detalhes do item no estoque como resposta
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;