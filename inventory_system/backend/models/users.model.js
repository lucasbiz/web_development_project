const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
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
    },
    subsidiary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subsidiaries',
        required: false // usuário pode não ter uma subsidiária associada inicialmente
    }
}, {
    timestamps: true
});


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

userSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (err) {
        throw err;
    }
};

module.exports = mongoose.model('User', userSchema);

