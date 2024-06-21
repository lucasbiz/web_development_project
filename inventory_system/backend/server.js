const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./controllers/auth.controller');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/');
}

mongoose.connection.on('open', () => {
    console.log('Conectado a Base de Dados');
})

const itemsRouter = require('./routes/items.route');
const usersRouter = require('./routes/users.route');
const transfersRouter = require('./routes/transfers.route');
const subsidiariesRouter = require('./routes/subsidiaries.route');
const stocksRouter = require('./routes/stock.route');

app.use('/login', authRoutes);
app.use('/items', itemsRouter);
app.use('/users', usersRouter);
app.use('/transfers', transfersRouter);
app.use('/subsidiaries', subsidiariesRouter);
app.use('/stock', stocksRouter);

app.listen(port, () => {
    console.log(`Ouvindo na porta: ${port}`);
});