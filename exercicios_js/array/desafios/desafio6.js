//crie uma função que receba 4 números com paramentro (numero, minimo, maximo, inclusivo) e retorne se o parametro numero está entre o minimo e o maximo.
//Quando o parametro inclusivo for true, tenha 'entre' como inclusivo ou seja, considerando se o número é igual a minimo ou a maximo.
//Caso o parametro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se o número é igual a minimo ou a maximo

const estaEntre = function (numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo
    } return numero > minimo && numero < maximo 
}

console.log(estaEntre(80, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 150, true))