// desenvolva uma function que recebe um número correspondente a um ano e retorna se ele é bissexto ou não. Obs: não pode ser múltiplo de 100, exceto se for também múltiplo de 400
const anoBissexto = function (ano) {
    if ((ano % 4 == 0 && ano % 100 !== 0) || ano % 400 == 0) {
        return true
    } else {
        return false
    }
}   
console.log(anoBissexto(2020))
console.log(anoBissexto(2100))