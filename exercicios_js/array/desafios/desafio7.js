//Desenvolva uma funçaõ que recebe dois números inteiros não negativo(maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de multiplicação

const multiplicar = function (numero1, numero2) {
    let resultado = 0
    for (let i = 0; i <numero2; i++) {
        resultado += numero1
    }
    return resultado
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))