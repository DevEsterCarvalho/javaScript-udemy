//crie uma function que recebe um array de números e um número que é a quantidade especifica de dígitos. Que retorne somente aqueles números do array que tem a quantidade de dígitos indicada pelo segundo parâmetro
const digitos = function (array, numero) {
    return array.filter(num => String(num).length == numero)
}

console.log(digitos([38, 2, 365, 10, 125, 11], 2)) 
console.log(digitos([5, 9, 1, 125,11], 1))