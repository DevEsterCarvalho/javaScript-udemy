//crie uma funcao que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

const maiorOuIgual = function(primeiroNumero,segundoNumero) {
    if (primeiroNumero >= segundoNumero) {
    return true
    } else {
    return false
    }
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 50))
console.log(maiorOuIgual(125, 50))
