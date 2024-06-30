// Importa os módulos necessários
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Cria uma instância do aplicativo Express
const app = express();
const port = process.env.PORT || 3125;

// Adiciona middleware para permitir solicitações de qualquer origem
app.use(cors());
// Adiciona middleware para analisar o corpo das requisições como JSON
app.use(express.json());
app.use(bodyParser.json()); 

// Função principal que conecta ao MongoDB
main().catch(err => console.log(err));

async function main() {
    // Conecta ao MongoDB usando o endereço fornecido
    mongoose.connect('mongodb://0.0.0.0:27017/')
    .then(() => {
      console.log('Conexão com MongoDB estabelecida com sucesso');
    })
    .catch(err => {
      console.error('Erro ao conectar com MongoDB', err);
    });
}

// Mostra uma mensagem quando a conexão com o banco de dados é aberta
mongoose.connection.on('open', () => {
    console.log('Conectado a Base de Dados');
});

// Importa os roteadores para as rotas específicas
const usersRouter = require('./routes/users.route');
const subsidiariesRouter = require('./routes/subsidiaries.route');
const stocksRouter = require('./routes/stock.route');
const authRouter = require('./routes/login.route');
const registerRouter = require('./routes/register.route');
const itemsRouter = require('./routes/items.route');

// Define os caminhos das rotas e os roteadores correspondentes
app.use('/api/items', itemsRouter);
app.use('/api/login', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/subsidiaries', subsidiariesRouter);
app.use('/api/stock', stocksRouter);
app.use('/api/register', registerRouter);

// Inicia o servidor e faz com que ele escute na porta especificada
app.listen(port, () => {
    console.log(`Ouvindo na porta: ${port}`);
});
