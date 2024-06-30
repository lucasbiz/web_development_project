const mongoose = require('mongoose');

// Define o schema do estoque, que representa a estrutura dos documentos na coleção 'stocks'
const StockSchema = new mongoose.Schema({
    // Campo 'item' que armazena a referência ao objeto 'Item' usando seu ObjectId
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    // Campo 'date' que será uma data, com valor padrão sendo a data e hora atuais
    date: {
        type: Date,
        default: Date.now
    }
}, {
    // Opção que adiciona os campos 'createdAt' e 'updatedAt' automaticamente
    timestamps: true
});

// Exporta o modelo 'Stock' baseado no StockSchema para ser usado em outras partes da aplicação
module.exports = mongoose.model('Stock', StockSchema);

