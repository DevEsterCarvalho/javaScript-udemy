//crie uma função que receba um array com uma quantidade inderteminada de números e retorne a média desses números
function calcularMedia (numeros) {
    let soma = 0
    for (let numero of numeros) {
        soma += numero
    }
    let media = soma / numeros.length
    return media
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))