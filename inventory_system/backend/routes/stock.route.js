const express = require('express');
const router = express.Router();
const Stock = require('../models/stock.model');
const Item = require('../models/items.model');
const mongoose = require("mongoose");

router.post("/stock", async (req, res) => {
   try {
       const stock= await Stock.find();
       res.json(stock);
   }
   catch (err) {
       res.status(500).json({ message: err.message });
   }
});

router.get("/stock/:id", async (req, res) => {
   //[Mais código aqui]
});

module.exports = router;