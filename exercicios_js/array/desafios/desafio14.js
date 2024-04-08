//elabore uma function que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares

const paresEIndicesPares = function (numeros) {
    return numeros.filter ((numero, indice) => {
        return numero % 2 == 0 && indice % 2 == 0
    })
}

console.log(paresEIndicesPares([1, 2, 3, 4]))
console.log(paresEIndicesPares([10, 70, 22, 43]))