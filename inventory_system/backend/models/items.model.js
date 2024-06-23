const mongoose = require('mongoose');
const AutoIncrement = require ('mongoose-sequence')(mongoose)

const itemSchema = new mongoose.Schema({
    cod: {
        type: Number
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    sell_price: {
        type: Number,
        required: true
    },
    buy_price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

itemSchema.plugin(AutoIncrement, { inc_field: 'cod' });

module.exports = mongoose.model('Item', itemSchema);
