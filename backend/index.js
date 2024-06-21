const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
    origin: '*'
}));

app.use(express.json())

app.listen(3125, ()=>console.log("Listening"))

// TRATADOR DA REQUISIÇÃO DE CADASTRO, FALTA A CONEXÃO COM O DB
app.post('/register', function(req, res) {
    const body = req.body
    const name = body.name
    const email = body.email
    const password = body.password
    console.log(name)
    res.status(200).send(name + "Foi cadastrado com sucesso!")
})



// AQUI AINDA FALTA TODO O TRATAMENTO DO LOGIN E CONEXÃO COM O DB
app.post('/login', function(req, res) {
    const body = req.body
    const name = body.name
    const password = body.password
})
