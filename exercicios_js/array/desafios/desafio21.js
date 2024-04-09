//crie uma função que gere um número aleatório de 0  10 e se o parametro for igual ao número aleatório ela retorne um parabéns, se não, mostre o número sorteado
const funcaoDaSorte = function(numero){
    let aleatorio = (Math.floor(Math.random()* 10))
    if (aleatorio == numero) {
        return ("Parabéns! O número sorteado foi o " + numero)
    } else {
        return ("Que pena! O número sorteado foi o " + aleatorio)
    }
}

console.log(funcaoDaSorte(7))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(0))
