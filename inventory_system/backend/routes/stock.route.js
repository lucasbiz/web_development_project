const express = require('express');
const router = express.Router();
const Stock = require('../models/stock.model');
const Item = require('../models/items.model');


router.post("/", async (req, res) => {
    const { itemId, quantity } = req.body;
    try {
        const item = await Item.findById(itemId);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }

        let stockItem = await Stock.findOne({ item: itemId });
        if (stockItem) {
            stockItem.quantity = quantity;
        } else {
            stockItem = new Stock({
                item: itemId,
                quantity: quantity
            });
        }

        const savedStockItem = await stockItem.save();
        res.status(201).json(savedStockItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const items = await Stock.find().populate('item');
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Atualiza um item existente no estoque pelo ID
router.patch("/stock/:id", async (req, res) => {
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
router.delete("/stock/:id", async (req, res) => {
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
router.get("/stock/:id", async (req, res) => {
    try {
        const id = req.params.id; // Acessa o ID do item a partir do parâmetro de rota
        const item = await Stock.findById(id); // Busca o item no banco de dados pelo ID
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.json(item); // Retorna os detalhes do item como resposta
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;