const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 3125;

app.use(cors());
app.use(express.json());


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/inventory_system');
}
mongoose.connection.on('open', () => {
    console.log('Conectado a Base de Dados');
});


const usersRouter = require('./routes/users.route');
const subsidiariesRouter = require('./routes/subsidiaries.route');
const stocksRouter = require('./routes/stock.route');
const authRouter = require('./routes/login.route');
const registerRouter = require('./routes/register.route');
const itemsRouter = require('./routes/items.route');

app.use('/api/items', itemsRouter);
app.use('/api/login', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/subsidiaries', subsidiariesRouter);
app.use('/api/stock', stocksRouter);
app.use('/api/register', registerRouter);


app.listen(port, () => {
    console.log(`Ouvindo na porta: ${port}`);
});
