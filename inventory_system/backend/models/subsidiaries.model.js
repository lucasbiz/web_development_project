const mongoose = require('mongoose');

// Define o schema das subsidiárias, que representa a estrutura dos documentos na coleção 'subsidiaries'
const SubsidiariesSchema = new mongoose.Schema({
    // Campo 'name' que será uma string e é obrigatório
    name: {
        type: String,
        required: true
    },
    // Campo 'location' que será uma string e é obrigatório
    location: {
        type: String,
        required: true
    },
    // Campo 'stock' que armazena a referência ao objeto 'Stock' usando seu ObjectId
    stock: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stock',
        required: true
    },
    // Campo 'date' que será uma data, com valor padrão sendo a data e hora atuais
    date: {
        type: Date,
        default: Date.now
    }
});

// Exporta o modelo 'Subsidiaries' baseado no SubsidiariesSchema para ser usado em outras partes da aplicação
module.exports = mongoose.model('Subsidiaries', SubsidiariesSchema);
