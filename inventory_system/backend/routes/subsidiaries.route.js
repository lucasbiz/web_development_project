const express = require('express');
const router = express.Router();
const Subsidiaries = require('../models/subsidiaries.model');

//Todas as subsidiárias
router.get('/', async (req, res) => {
    try {
        const subsidiaries = await Subsidiaries.find().populate('stock');
        res.json(subsidiaries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Subsidiária por ID
router.get('/:id', async (req, res) => {
    try {
        const subsidiary = await Subsidiaries.findById(req.params.id).populate('stock');
        if (subsidiary == null) {
            return res.status(404).json({ message: 'Cannot find subsidiary' });
        }
        res.json(subsidiary);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Criar uma nova subsidiária
router.post('/', async (req, res) => {
    const subsidiary = new Subsidiaries({
        name: req.body.name,
        location: req.body.location,
        stock: req.body.stock
    });
    try {
        const newSubsidiary = await subsidiary.save();
        res.status(201).json(newSubsidiary);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Atualizar uma subsidiária
router.patch('/:id', async (req, res) => {
    try {
        const subsidiary = await Subsidiaries.findById(req.params.id);
        if (subsidiary == null) {
            return res.status(404).json({ message: 'Cannot find subsidiary' });
        }

        if (req.body.name != null) {
            subsidiary.name = req.body.name;
        }
        if (req.body.location != null) {
            subsidiary.location = req.body.location;
        }
        if (req.body.stock != null) {
            subsidiary.stock = req.body.stock;
        }

        const updatedSubsidiary = await subsidiary.save();
        res.json(updatedSubsidiary);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deletar uma subsidiária
router.delete('/:id', async (req, res) => {
    try {
        const subsidiary = await Subsidiaries.findById(req.params.id);
        if (subsidiary == null) {
            return res.status(404).json({ message: 'Cannot find subsidiary' });
        }

        await subsidiary.remove();
        res.json({ message: 'Subsidiary deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
