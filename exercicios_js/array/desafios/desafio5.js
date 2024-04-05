//escreva uma função que receba um valor booleano ou numérico, o retorno da função deverá ser o inverso. Se a entrada for false, retornará true, se for numérico deverá retornar o inverso
function inverso (valor)  {
    const tipo = typeof valor
    if (tipo == "boolean") {
        return !valor
    } else if (tipo == "number") {
        return -valor
    } else {
        return `booleano ou números esperador é do tipo ${tipo}`
    }
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))