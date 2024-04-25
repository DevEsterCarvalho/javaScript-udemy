//escreva uma function que recebe uma palavra e um array de strings como paarametros.  A função deve filtrar as palavras do array que contêm a string do primeiro parametro. 
const palavraSemelhante = function (palavra, array){
    const palavras = array.filter(item => item.includes(palavra)) 
    return palavras
}

console.log(palavraSemelhante("pro", ["programação", "mobile", "profissional"]))

const palavra = "python"
const array = ["javaScript", "java", "c++"]
console.log(palavraSemelhante(palavra, array))