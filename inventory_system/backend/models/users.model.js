const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Cria uma instância do Schema do mongoose
const Schema = mongoose.Schema;

// Define o schema do usuário, que representa a estrutura dos documentos na coleção 'users'
const userSchema = new Schema({
    // Campo 'name' que será uma string, é obrigatório, único, trim remove espaços em branco nas extremidades e tem um comprimento mínimo de 5 caracteres
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 5
    },
    // Campo 'email' que será uma string, é obrigatório, único, trim remove espaços em branco nas extremidades e tem um comprimento mínimo de 7 caracteres
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 7
    },
    // Campo 'password' que será uma string, é obrigatório, trim remove espaços em branco nas extremidades e tem um comprimento mínimo de 5 caracteres
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    // Campo 'subsidiary' que armazena a referência ao objeto 'Subsidiaries' usando seu ObjectId, não é obrigatório
    subsidiary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subsidiaries',
        required: false // usuário pode não ter uma subsidiária associada inicialmente
    }
}, {
    // Opção que adiciona os campos 'createdAt' e 'updatedAt' automaticamente
    timestamps: true
});

// Middleware pré-save que será executado antes de salvar um documento
userSchema.pre('save', async function (next) {
    try {
        // Gera um salt para o hashing da senha
        const salt = await bcrypt.genSalt(10);
        // Gera um hash da senha usando o salt
        const hashedPassword = await bcrypt.hash(this.password, salt);
        // Substitui a senha original com o hash
        this.password = hashedPassword;
        next();
    } catch (err) {
        next(err);
    }
});

// Método de instância para verificar se a senha fornecida é válida
userSchema.methods.isValidPassword = async function (password) {
    try {
        // Compara a senha fornecida com o hash armazenado no banco de dados
        return await bcrypt.compare(password, this.password);
    } catch (err) {
        throw err;
    }
};

// Exporta o modelo 'User' baseado no userSchema para ser usado em outras partes da aplicação
module.exports = mongoose.model('User', userSchema);