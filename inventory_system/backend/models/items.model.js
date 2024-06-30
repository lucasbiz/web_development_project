const mongoose = require('mongoose');

// Importa o plugin mongoose-sequence para auto-incrementar campos
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Define o schema do item, que representa a estrutura dos documentos na coleção 'items'
const itemSchema = new mongoose.Schema({
    // Campo 'cod' que será um número e auto-incrementado
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

// Aplica o plugin de auto-incremento ao schema, incrementando o campo 'cod'
itemSchema.plugin(AutoIncrement, { inc_field: 'cod' });

// Exporta o modelo 'Item' baseado no itemSchema para ser usado em outras partes da aplicação
module.exports = mongoose.model('Item', itemSchema);

