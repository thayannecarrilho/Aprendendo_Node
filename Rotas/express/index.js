/*Crie um novo projeto com Express;
Adicione nodemon e coloque um script chamado serve para rodar o projeto na porta 5000;
Crie duas páginas da sua escolha;
Adicione CSS as páginas, mude a cor de fundo e a cor da fonte, pelo menos;
Separe as rotas no recurso de Router do Express;*/

const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const basePath = path.join(__dirname, 'templates')
const users = require('./users')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())
app.use(express.static('public'))

app.get("/erro", function(req, res, next){
    res.status(404).sendFile(`${basePath}/erro.html`)
})

app.get("/", function(req, res){
    res.sendFile(`${basePath}/index.html`)
})



app.listen(5000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor Iniciado!")
    }
})

