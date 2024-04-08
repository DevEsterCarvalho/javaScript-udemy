//escreva uma function que recebe um array de números e retorna a soma de todos os números desse array
const somarNumeros = (array) => {
    let soma = 0
    for (let numero of array) {
        soma += numero
    }
    return soma
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))