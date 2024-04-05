//escreva uma função que receba dois parametros. O primeiro parametro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado
const repetir = function(parametro, quantidade) {
    let resultado = []

    for (let i = 0; i <quantidade; i++) {
        resultado.push(parametro)
    }
    return resultado
}

console.log(repetir(7, 3))
console.log("código", 2)