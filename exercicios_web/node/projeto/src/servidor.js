const porta = 3003
const express = require('express')
const app = express()
const bancoDeDados = require ('./bancoDeDados')

//app.get('/produtos',(requisicao, resposta, next) => {
//    resposta.send({nome: 'Notebook', preco:123.45})//converter para json
//})

app.get('/produtos',(requisicao, resposta, next) => {
    resposta.send(bancoDeDados.getProdutos())
})

app.get('produtos/:id', (requisicao, resposta, next) => {
    resposta.send(bancoDeDados.getProduto(requisicao.params.id))
})

app.post('produtos', (requisicao, resposta, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: requisicao.body.name,
        preco: requisicao.body.preco
    })
    resposta.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta${porta}.`)
})