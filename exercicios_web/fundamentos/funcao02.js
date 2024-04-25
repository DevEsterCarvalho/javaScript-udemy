//armazenando função em uma var

const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma função aroow em uma va
const soma  = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retoro implícito
const subtracao = (a, b) => a- b
console.log(subtracao(2, 3))