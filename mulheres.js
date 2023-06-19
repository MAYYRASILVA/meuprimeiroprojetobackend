const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome:'Simara Conceição',
        imagem:'https://bit.ly/3LJIyOF',
        minibio: 'desenvolvedora e instrutora'
    },
    {
        nome:'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'fundadora da Programaria'
    },
    {
        nome: 'Nina da Hora',
        Imagem: 'https://www.fundacaotelefonicavivo.org.br/wp-content/uploads/2022/11/10-ninadahora1200x628desktop.png?x15348',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)