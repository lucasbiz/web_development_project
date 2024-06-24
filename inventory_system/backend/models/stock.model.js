const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('Stock', StockSchema);
