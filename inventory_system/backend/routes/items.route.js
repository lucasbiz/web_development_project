const express = require('express'); // Importa o módulo express
const router = express.Router(); // Cria um novo roteador
const Item = require('../models/items.model'); // Importa o modelo Item

// Rota para obter todos os itens
router.get('/', async (req, res) => {
    try {
        const items = await Item.find(); // Busca todos os itens no banco de dados
        res.json(items); // Retorna os itens encontrados como JSON
    } catch (err) {
        res.status(500).json({ message: err.message }); // Retorna um erro 500 se algo der errado
    }
});

// Rota para obter um item específico pelo ID
router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id); // Busca um item pelo ID
        if (!item) {
            return res.status(404).json({ message: 'Item not found' }); // Retorna um erro 404 se o item não for encontrado
        }
        res.json(item); // Retorna o item encontrado como JSON
    } catch (err) {
        res.status(500).json({ message: err.message }); // Retorna um erro 500 se algo der errado
    }
});

// Rota para criar um novo item
router.post('/', async (req, res) => {
    const { name, sell_price, buy_price } = req.body; // Extrai os campos do corpo da requisição

    try {
        const newItem = new Item({
            name: name,
            sell_price: sell_price,
            buy_price: buy_price
        }); // Cria uma nova instância do Item com os dados fornecidos

        const savedItem = await newItem.save(); // Salva o novo item no banco de dados
        res.status(201).json(savedItem); // Retorna o item salvo como JSON com status 201
    } catch (error) {
        res.status(400).json({ message: error.message }); // Retorna um erro 400 se algo der errado
    }
});

// Rota para atualizar um item específico pelo ID
router.patch('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id); // Busca um item pelo ID
        if (!item) {
            return res.status(404).json({ message: 'Item not found' }); // Retorna um erro 404 se o item não for encontrado
        }

        // Atualiza os campos do item se eles estiverem presentes no corpo da requisição
        if (req.body.name != null) {
            item.name = req.body.name;
        }
        if (req.body.sell_price != null) {
            item.sell_price = req.body.sell_price;
        }
        if (req.body.buy_price != null) {
            item.buy_price = req.body.buy_price;
        }

        const updatedItem = await item.save(); // Salva as alterações no banco de dados
        res.json(updatedItem); // Retorna o item atualizado como JSON
    } catch (err) {
        res.status(400).json({ message: err.message }); // Retorna um erro 400 se algo der errado
    }
});

// Rota para deletar um item específico pelo ID
router.delete('/:id', async (req, res) => {
    try {
        const item = await Item.findOne({_id: req.params.id});
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        await item.deleteOne();
        res.json({ message: 'Item deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Failed to delete item' });
    }
});

// Exporta o modulo para que possa ser usado em outras partes da aplicação
module.exports = router;

