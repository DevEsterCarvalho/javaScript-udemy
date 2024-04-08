//crie uma função que receba um array de produtos e retorne o total de despesas
const produtos = ([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entreterimento", preco: 150}
]) 

function calcularTotalDespesas(produtos) {
    let totalDespesas = 0
    for (let produto of produtos) {
        totalDespesas += produto.preco
    }
    return totalDespesas
}

const total = calcularTotalDespesas(produtos)
console.log(total)
