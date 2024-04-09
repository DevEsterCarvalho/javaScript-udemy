//crie uma fuction que recebe um caractere e uma string e retorne a quantiade de vezes que o caractere se repete na string
const contarCaractere = function (caractere, string) {
    let quantidade = 0
    const stringLowerCase = string.toLowerCase()
    const caractereLowerCase = caractere.toLowerCase()
    for (let i = 0; i < stringLowerCase.length; i++) {
        if (stringLowerCase[i] === caractereLowerCase) {
            quantidade++
        }
    }
    return quantidade
}
console.log(contarCaractere("c", "Conhece-te a ti mesmo!"))
console.log(contarCaractere("e", "Este é um exemplo com a letra 'e'"))