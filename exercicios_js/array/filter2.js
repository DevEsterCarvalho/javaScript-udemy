Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}   

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 18.99, fragil: true},
    {nome: 'Copo de Plástico', preco: 12.99, fragil: false}
]

console.log(produtos.filter2(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragilidade = produto => produto.fragil == true

resultado = produtos.filter2(caro).filter2(fragilidade)
console.log(resultado)