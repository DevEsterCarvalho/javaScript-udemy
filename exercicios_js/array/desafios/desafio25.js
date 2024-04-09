//desenvolva uma function que recebe uma string e retorna essa string somente com as consoantes, sem as vogais.
const removerVogais = function (string) {
    return string.replace(/(a|e|i|o|u)/gi, '')
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))