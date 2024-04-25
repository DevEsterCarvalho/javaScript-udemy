//crie uma function que receba uma string como parametro e conte quantas palavras tem nela, considere que todas as palavras são separadas por um espaço
const contarPalavras = function (string) {
    const palavras = string.split (" ")
    return palavras.length
} 

console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprenderndo a programar"))