//crie um function que receba um array e retorne o primeiro e o útimo elemento desse array com um novo array

const primeitoEUltimo = function(array){
    return [array[0], array[array.length -1]]
}

console.log(primeitoEUltimo([7, 14, "Olá"]))
console.log(primeitoEUltimo([-100, "aplicativo", 16]))