function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 4, 10, 5, 6)
imprimirSoma()

function soma(a, b= 1){
    return a + b
}

console.log(soma(3,7))
console.log(soma(2))
