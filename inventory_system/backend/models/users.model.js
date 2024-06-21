const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 7
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    }
}, {
    timestamps: true
});

// Middleware para hash da senha antes de salvar
userSchema.pre('save', async function (next) {
    try {
        // Gera um salt
        const salt = await bcrypt.genSalt(10);
        // Gera um hash da senha usando o salt
        const hashedPassword = await bcrypt.hash(this.password, salt);
        // Substitui a senha com o hash
        this.password = hashedPassword;
        next();
    } catch (err) {
        next(err);
    }
});

// Método para comparar a senha
userSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (err) {
        throw err;
    }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
