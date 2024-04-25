//crie uma fuction que recebe um array de números e retorna o segundo maior número do array
const segundoMaior = function(array) {
    let maior = array[0]
    for (let i=1; i < array.lenght; i++) {
        if (array[i] > maior) {
            segundoMaior = maior
            maior = array[i]
        } else if (array[i] > segundoMaior && array[i] !== maior) {
            segundoMaior = array[i]
        }
    }
    return maior
}

console.log(segundoMaior([12, 16, 1, 5]))